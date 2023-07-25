import React, { useState } from 'react';
import {H1,ContainerFormProfile,InputForm,ContainerTextLinks,SpanRed,LinkBlue,Section} from "../styledSaas/SignCss";
import {FcHome} from "react-icons/fc";
import { getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Profile() {
  const auth=getAuth();
  const nevigate=useNavigate();
  //get data from firebase
  const [formData,setFormData]=useState({name:auth.currentUser.displayName,email:auth.currentUser.email});
  const {name,email}=formData;
  const [changeDetails,setChangeDetails]=useState(false);

  // chnage detail in the useState
  const handleChange=(e)=>{
    setFormData((current)=>({
      ...current,
      [e.target.id]:e.target.value
    }))
  };
  //add the change to database
  const onSubmit=async()=>{
    try {
      if(auth.currentUser.displayName !== name){
        //update display name in firebase auth
        await updateProfile(auth.currentUser,{
          displayName:name,
        })

        //update name in firestore!
        const docRef=doc(db,"users",auth.currentUser.uid)
        await updateDoc(docRef,{
          name,
        })
      }
      toast.success("Profile details  updated.")
    } catch (error) {
      toast.error("Could not update the profile details")
    }
  }


  const handleSubmit=(e)=>{
    e.preventDefualt();
  }

  //LogOut
  const handleSignOut=()=>{
    auth.signOut();
    nevigate("/");
  }
  return (
    <Section>
    <H1>My Profile</H1>
      <ContainerFormProfile>
        <form onSubmit={handleSubmit}>
          <InputForm type='text' disabled={!changeDetails} id="name" value={name}  onChange={handleChange} className={changeDetails?'opacity-100':'opacity-60'} />
          <InputForm type='email' disabled={!changeDetails} id="email" value={email}  onChange={handleChange} className={changeDetails?'opacity-100':'opacity-60'} />
          
    
          <ContainerTextLinks>
            <p>Do want to change your name?
              <SpanRed onClick={()=>{
                changeDetails && onSubmit(); 
                setChangeDetails((current)=>!current)}
              }>
               {changeDetails ? "Apply Change" : "Edit"}
              </SpanRed>
            </p>
            <p>
              <LinkBlue onClick={handleSignOut}>Sign Out</LinkBlue>
            </p>
          </ContainerTextLinks>

          <button type='submit' className=' flex items-center justify-center w-full bg-blue-700 text-white px-7 py-3 uppercase rounded text-sm font-medium hover:bg-blue-800 active:bg-blue-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out'>
            <FcHome className='text-2xl bg-rose-300  rounded-full mr-2'/>
            Sell Or Rent your Home
          </button>

          {/* <SubmitFormButton type='submit'>Sell Or Rent your Home</SubmitFormButton> */}
      
        </form>
      </ContainerFormProfile>
  </Section>
  )
}
