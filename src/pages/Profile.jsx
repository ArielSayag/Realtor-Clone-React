import React, { useState } from 'react';
import {H1,ContainerFormProfile,InputForm,ContainerTextLinks,SpanRed,LinkBlue,Section} from "../styledSaas/SignCss";
import {FcHome} from "react-icons/fc";
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth=getAuth();
  const nevigate=useNavigate();
  const [formData,setFormData]=useState({name:"",email:""});
  const {name,email}=formData;



  const handleChange=(e)=>{
    setFormData((current)=>({
      ...current,
      [e.target.id]:e.target.value
    }))
  };

  const handleSubmit=(e)=>{
    e.preventDefualt();
  }

  const handleSignOut=()=>{
    auth.signOut();
    nevigate("/");
  }
  return (
    <Section>
    <H1>My Profile</H1>
      <ContainerFormProfile>
        <form onSubmit={handleSubmit}>
          <InputForm type='text' disabled id="name" value={name} placeholder='Full name' onChange={handleChange}/>
          <InputForm type='email' disabled id="email" value={email} placeholder='Email address' onChange={handleChange}/>
          
    
          <ContainerTextLinks>
            <p>Do want to change your name?
              <SpanRed >Edit</SpanRed>
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
