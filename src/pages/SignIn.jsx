import React, { useState } from 'react';
import {AiFillEye ,AiFillEyeInvisible } from "react-icons/ai";
import OAuth from '../components/OAuth';
import { InputForm ,LinkRed,  LinkBlue, H1,ContainerDiv , ContainerImage , ContainerForm,IconDiv,ContainerTextLinks , SubmitFormButton , ORdiv } from '../styledSaas/SignCss';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const srcImg="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";

function SignIn() {

  const [formData,setFormData]=useState({email:"",password:""});
  const {email,password}=formData;
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

  const handleSignInSubmit=async(e)=>{
    e.preventDefault();
    try {
      const auth=getAuth();
      const userCredential=await signInWithEmailAndPassword(auth,email,password);
      if(userCredential.user){
        toast.success("Sign Up was successful")
        navigate("/");
      }
    } catch (error) {
      toast.error("Email or Password not correct.")
    }
  }

  return (
    <section>
      <H1>Sign In</H1>
      <ContainerDiv>
        <ContainerImage>
            <img className=' w-full rounded-2xl ' src={srcImg} alt="key" ></img>
        </ContainerImage>
        <ContainerForm>
          <form onSubmit={handleSignInSubmit}>
            <InputForm type='email' id="email" value={email} placeholder='Email address' onChange={handleChange}/>
            
            <IconDiv>

              <InputForm type={showPassword?'text':'password'} id="password" value={password} placeholder='Password' onChange={handleChange}/>
              
              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={handlePasswordClick}/> : <AiFillEye className='absolute right-3 top-3  text-xl cursor-pointer' onClick={handlePasswordClick}/>}
            </IconDiv>

            <ContainerTextLinks>
              <p>Don't have an account?
                <LinkRed href="/sign-up">Register</LinkRed>
              </p>
              <p>
                <LinkBlue href="/forgot-password">Forgot password?</LinkBlue>
              </p>
            </ContainerTextLinks>
            
            <SubmitFormButton type='submit'>Sign-In</SubmitFormButton>
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

export default SignIn;