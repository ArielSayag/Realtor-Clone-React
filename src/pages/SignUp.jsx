import React, { useState } from 'react';
import {AiFillEye ,AiFillEyeInvisible } from "react-icons/ai";
import OAuth from '../components/OAuth';
import { InputForm ,LinkRed, H1,ContainerDiv , ContainerImage , ContainerForm,IconDiv,ContainerTextLinks , SubmitFormButton , ORdiv } from '../styledSaas/SignCss';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import {db} from "../firebase";
import { serverTimestamp, setDoc ,doc } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';



const srcImg="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";

function SignUp() {

  const [formData,setFormData]=useState({email:"",password:"",name:""});
  const {email,password,name}=formData;
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);

  const handleChange=(e)=>{
    setFormData((current)=>({
      ...current,
      [e.target.id]:e.target.value
    }))
  }

  const handlePasswordClick=()=>{
    setShowPassword((current)=>!current);
  }

  const  handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const auth=getAuth();
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
      updateProfile(auth.currentUser,{
        displayName:name
      })
      const user=userCredential.user;
      const formDataCopy={...formData}
      delete formDataCopy.password;
      formDataCopy.timestamp=serverTimestamp();

      await setDoc(doc(db,"users",user.uid),formDataCopy);
      toast.success("Sign Up was successful")
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with the registration.")
    }
  }

  return (
    <section>
      <H1>Sign Up</H1>
      <ContainerDiv>
        <ContainerImage>
            <img className=' w-full rounded-2xl ' src={srcImg} alt="key" ></img>
        </ContainerImage>
        <ContainerForm>
          <form onSubmit={handleSubmit}>
            <InputForm type='text' id="name" value={name} placeholder='Full name' onChange={handleChange}/>
            <InputForm type='email' id="email" value={email} placeholder='Email address' onChange={handleChange}/>
            
            <IconDiv>

              <InputForm type={showPassword?'text':'password'} id="password" value={password} placeholder='Password' onChange={handleChange}/>
              
              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={handlePasswordClick}/> : <AiFillEye className='absolute right-3 top-3  text-xl cursor-pointer' onClick={handlePasswordClick}/>}
            </IconDiv>

            <ContainerTextLinks>
              <p>Already have an  account?
                <LinkRed href="/sign-in">Sign In</LinkRed>
              </p>
         
            </ContainerTextLinks>
            <SubmitFormButton type='submit'>Sign-Up</SubmitFormButton>
            <ORdiv>
              <p className='text-center font-semibold mx-4'>OR</p>
            </ORdiv>
            <OAuth/>
          </form>
        </ContainerForm>
      </ContainerDiv>
    </section>
  )
}

export default SignUp;