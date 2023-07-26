import React, { useState } from 'react'
import { Main,H1,PHeadLine,RadioButton,InputForm ,TextAreaForm,InputFile} from '../styledSaas/ListingCss'
import { SubmitFormButton } from '../styledSaas/SignCss';
function CreateListing() {
  const [formData,setFormData]=useState({type:"rent",name:"",bedrooms:"1",baths:"1",parking:"false",furnished:"false",address:"",description:"",offer:"false",regulerPrice:1,discountPrice:0})
  const {type,name,bedrooms,baths,parking,furnished,address,description,offer,regularPrice,discountPrice}=formData;

  const handleChangeButton=(e)=>{
    e.preventDefault();
    
    setFormData((current)=>({
      ...current,
      [e.target.id]:e.target.value
    }))

  }

  return (
    <Main className='max-w-md px-2 mx-auto '>
      <H1>Create a Listing</H1>
      <form>
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
          <RadioButton type='button' id="parking" value='true' onClick={handleChangeButton} className={parking==="false"?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="parking" value='false' onClick={handleChangeButton} className={parking==="true"?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
        </div>

        <PHeadLine><span className='text-red-500'>*</span>Furnished</PHeadLine>
        <div className='flex'>
          <RadioButton type='button' id="furnished" value='true' onClick={handleChangeButton} className={furnished==="false"?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="furnished" value='false' onClick={handleChangeButton} className={furnished==="true"?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
        </div>

        <PHeadLine><span className='text-red-500'>*</span>Address</PHeadLine>
        <TextAreaForm required type="text" maxLength="1000" minLength="10" value={address} placeholder='address..' id="address" onChange={handleChangeButton} />
      
        <PHeadLine><span className='text-red-500'>*</span>Description</PHeadLine>
        <TextAreaForm required type="text" maxLength="1000" minLength="10" value={description} placeholder='description..' id="description" onChange={handleChangeButton} />
      
        <PHeadLine><span className='text-red-500'>*</span>Offer</PHeadLine>
        <div className='flex mb-6'>
          <RadioButton type='button' id="offer" value='true' onClick={handleChangeButton} className={offer==="false"?'bg-white text-black':' text-white bg-slate-600'}>Yes</RadioButton>
          <RadioButton type='button' id="offer" value='false' onClick={handleChangeButton} className={offer==="true"?'ml-3 bg-white text-black':'ml-3 text-white bg-slate-600'}>No</RadioButton>
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

        { offer==="true" && <>
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