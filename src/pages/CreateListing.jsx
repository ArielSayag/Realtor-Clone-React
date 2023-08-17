import React, { useState } from 'react'
import { Main,H1,PHeadLine,RadioButton,InputForm ,TextAreaForm,InputFile} from '../styledSaas/ListingCss'
import { SubmitFormButton } from '../styledSaas/SignCss';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc ,  collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

function CreateListing() {
  const nevigate=useNavigate();
  const auth=getAuth();
  const [geoLocationEnabled,setGeoLocationEnabled]=useState(true);
  const [loading,setLoading]=useState(false);

  const [formData,setFormData]=useState({
    type:"rent",
    name:"",
    bedrooms:1,
    baths:1,
    parking:false,
    furnished:false,
    address:"",
    description:"",
    offer:false,
    regularPrice:1,
    discountPrice:0,
    latitude:0.0,
    longitude:0.0,
    images:{},
  });
  const {
    type,
    name,
    bedrooms,
    baths,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountPrice,
    latitude,
    longitude,
    images}=formData;

  const handleChangeButton=(e)=>{

    let boolean =null;
    if(e.target.value==="true"){
      boolean=true
    }
    if(e.target.value==="false"){
      boolean=false
    }
    if(e.target.files){
      setFormData((current)=>({
        ...current,
        images: e.target.files,
      }))
    }
    if(!e.target.files){
      setFormData((current)=>({
        ...current,
        [e.target.id]: boolean ?? e.target.value
      }))
    }
  }

  const handleOnSubmit =async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(+discountPrice >= +regularPrice){
      setLoading(false);
      toast.error("Discounted price needs to be less then regular price ")
      return;
    }
    if(images.length > 6){
      setLoading(false);
      toast.error("Maximum 6 images are allowed");
      return;
    }
    let geoLocation={};
    let location;
    // get location for add marker to google map
    if(geoLocationEnabled){
      const response =await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`);
      const data=await response.json()
      geoLocation.lat=data.results[0]?.geometry.location.lat ?? 0;
      geoLocation.lng=data.results[0]?.geometry.location.lng ?? 0;

      location= data.status === "ZERO_RESULTS" && undefined;

      if(location===undefined ){//|| location.includes("undefined")
        setLoading(false);
        toast.error("Please enter a valid address");
        return;
      }else{
        geoLocation.lat=latitude;
        geoLocation.lng=longitude;
      }
      
      const storeImage =async (img)=>{

        return new Promise((resolve,reject)=>{
          const storage=getStorage();
          const filename=`${auth.currentUser.uid}-${img.name}-${uuidv4()}`;
          const storageRef = ref(storage,filename);

          const uploadTask = uploadBytesResumable(storageRef, img);

          uploadTask.on('state_changed', 
            (snapshot) => {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
              reject(error);
            }, 
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        })
      }

      const imgUrls=await Promise.all(
      [...images].map((img)=>storeImage(img)))
      .catch((error)=>{
        setLoading(false)
        toast.error("Images not uploaded")
        return ;
      });

      const formDataCopy={
        ...formData,
        imgUrls,
        geoLocation,
        timestamp: serverTimestamp(),
      };
      delete formDataCopy.images;
      !formDataCopy.offer &&  delete formDataCopy.discountPrice;
      delete formDataCopy.latitude;
      delete formDataCopy.longitude;

      const docRef= await addDoc(collection(db,"listings").formDataCopy);
      setLoading(false)
      toast.success("Listing created !");

      nevigate(`/category/${formDataCopy.type}/${docRef.id}`)
    }
  }
  if(loading){
    return <Spinner />
  }
  
  return (
    <Main className='max-w-md px-2 mx-auto '>
      <H1>Create a Listing</H1>
      <form onSubmit={handleOnSubmit}>
        <PHeadLine><span className='text-red-500'>*</span>Sell / Rent</PHeadLine>
        <div className='flex'>
          <RadioButton type='button' id="type" value="sell" onClick={handleChangeButton} className={type==="rent"?'bg-white text-black':' text-white bg-slate-600'}>Sell</RadioButton>
          <RadioButton type='button' id="type" value="rent" onClick={handleChangeButton} className={type==="sell"?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>Rent</RadioButton>
        </div>
        <PHeadLine><span className='text-red-500'>*</span>Name</PHeadLine>
        <InputForm required type="text" maxLength="32" minLength="10" value={name} placeholder='name..' id="name" onChange={handleChangeButton} />
        
        <div className='flex space-x-6 mb-6'>
          <div>
            <PHeadLine><span className='text-red-500'>*</span>Beds</PHeadLine>
            <InputForm required type="number" min="1" max="10" value={bedrooms} id="bedrooms" onChange={handleChangeButton} />
          </div>
          <div>
            <PHeadLine><span className='text-red-500'>*</span>Baths</PHeadLine>
            <InputForm required type="number" min="1" max="10" value={baths}  id="baths" onChange={handleChangeButton}/>
          </div>
        </div>

        <PHeadLine><span className='text-red-500'>*</span>Parking Spot</PHeadLine>
        <div className='flex'>
          <RadioButton type='button' id="parking" value={true} onClick={handleChangeButton} className={!parking?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="parking" value={false} onClick={handleChangeButton} className={parking?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
        </div>

        <PHeadLine><span className='text-red-500'>*</span>Furnished</PHeadLine>
        <div className='flex'>
          <RadioButton type='button' id="furnished" value={true} onClick={handleChangeButton} className={!furnished?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="furnished" value={false} onClick={handleChangeButton} className={furnished?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
        </div>

        <PHeadLine><span className='text-red-500'>*</span>Address</PHeadLine>
        <TextAreaForm required type="text" maxLength="1000" minLength="10" value={address} placeholder='address..' id="address" onChange={handleChangeButton} />
        {!geoLocationEnabled && (
          <div className='flex space-x-6  mb-6'>
            <div>
              <PHeadLine><span className='text-red-500'>*</span>Latitude</PHeadLine>
              <InputForm type='number' required id="latitude" min="-90" max="90" value={latitude} onChange={handleChangeButton}></InputForm>
            </div>
            <div>
              <PHeadLine><span className='text-red-500'>*</span>Longitude</PHeadLine>
              <InputForm type='number' required id="longitude"  min="-180" max="180" value={longitude} onChange={handleChangeButton}></InputForm>
            </div>
          </div>
        )}
        <PHeadLine><span className='text-red-500'>*</span>Description</PHeadLine>
        <TextAreaForm required type="text" maxLength="1000" minLength="10" value={description} placeholder='description..' id="description" onChange={handleChangeButton} />
      
        <PHeadLine><span className='text-red-500'>*</span>Offer</PHeadLine>
        <div className='flex mb-6'>
          <RadioButton type='button' id="offer" value={true} onClick={handleChangeButton} className={!offer?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="offer" value={false} onClick={handleChangeButton} className={offer?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
        </div>
        <div className='flex'>
          <div>
            <PHeadLine><span className='text-red-500'>*</span>Regular Price</PHeadLine>
            <div className='flex w-full items-center space-x-6'>
              <InputForm required type="number" min="50" max="5000000" value={regularPrice} id="regularPrice" onChange={handleChangeButton} />

              {type==="rent" && 
                <div className='mb-6'>
                  <p className='text-md w-full whitespace-nowrap'>$ /Month</p>
                </div>
              }
            </div>
          </div>
        </div>

        { offer && <>
        <div className='flex'>
          <div>
            <PHeadLine>Discount Price</PHeadLine>
            <div className='flex w-full items-center space-x-6'>
              <InputForm  type="number" min="0" max="5000000" value={discountPrice} id="discountPrice" onChange={handleChangeButton} />
              {type==="rent" && 
                  <div className='mb-6'>
                    <p className='text-md w-full whitespace-nowrap'>$ /Month</p>
                  </div>
              }
            </div>
          </div>
        </div>
        </>}

        <div className='mb-6'>
          <PHeadLine><span className='text-red-500'>*</span>Images</PHeadLine>
          <p className='text-gray-600'>The first image will be the cover (max 6 images)</p>
          <InputFile type='file' id="images" onChange={handleChangeButton} accept=".jpg,.png,.jpeg" multiple required/>
        </div>
   
        <SubmitFormButton type='submit'>Create Listing</SubmitFormButton>
        <div className='mt-6'></div>
      </form>
      
    </Main>
  )
}

export default CreateListing