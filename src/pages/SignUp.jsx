import React, { useState } from 'react';
import {AiFillEye ,AiFillEyeInvisible } from "react-icons/ai";
import styled from '@emotion/styled';
import OAuth from '../components/OAuth';

const srcImg="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";

const InputSignUp=styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding-left: 1rem  ;
  padding-right: 1rem;
  padding-top: 0.5re;
  padding-bottom: 0.5re;
  font-size: 1.25rem;
  line-height: 1.75rem;
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

`;

const LinkSignIn = styled.a`
  margin-left: 0.25rem; /* 4px */
  --tw-text-opacity: 1;
  color: rgb(220, 38, 38, var(--tw-text-opacity));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;

  &:hover {
    --tw-text-opacity: 1;
    color: rgb(185, 28, 28, var(--tw-text-opacity));
  }
`;


const H1SignUp=styled.h1`
  font-size: 1.875rem/* 30px */;
  line-height: 2.25rem/* 36px */;
  text-align: center;
  margin-top: 1.5rem/* 24px */;
  font-weight: 700;
`;

const ContainerDiv=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 1.5rem/* 24px */;
  padding-right: 1.5rem/* 24px */;
  padding-top: 3rem/* 48px */;
  padding-bottom: 3rem/* 48px */;
  max-width: 72rem/* 1152px */;
  margin-left: auto;
  margin-right: auto;
`;
const ContainerImage = styled.div`
  @media (min-width: 768px) {
    width: 67%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }

  margin-bottom: 3rem; /* 48px */

  @media (min-width: 768px) {
    margin-bottom: 1.5rem; /* 24px */
  }
`;

const ContainerForm=styled.div`
  width: 100%;
  @media (min-width: 768px) {
      width: 67%;
    }
  
  @media (min-width: 1024px) {
      width: 40%;
  }

  @media (min-width: 1024px) {
      margin-left: 5rem/* 80px */;
  }
`;

const IconDiv=styled.div`
  position: relative;
`;

const ContainerTextLinks=styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 0.875rem/* 14px */;
  line-height: 1.25rem/* 20px */;
  @media (min-width: 640px) {
      font-size: 1.125rem/* 18px */;
      line-height: 1.75rem/* 28px */;
  }
`;

const SignUpButton=styled.button`
width: 100%;
--tw-bg-opacity: 1;
background-color: rgb(37 99 235 / var(--tw-bg-opacity));
--tw-text-opacity: 1;
color: rgb(255 255 255 / var(--tw-text-opacity));
padding-left: 28px;
padding-right: 28px;
padding-top:12px;
padding-bottom: 12px;
font-size: 0.875rem/* 14px */;
line-height: 1.25rem/* 20px */;
font-weight: 500;
text-transform: uppercase;
border-radius: 0.25rem/* 4px */;
--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 0.5rem/* 8px */;

  &:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(29 78 216 / var(--tw-bg-opacity));
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  &:active{
    --tw-bg-opacity: 1;
    background-color: rgb(30 64 175 / var(--tw-bg-opacity));
  }
`;

const ORdiv=styled.div`
  margin-top: 1rem/* 16px */;
  margin-bottom: 1rem/* 16px */;
  display: flex;

  &:before{
    content: var(--tw-content);
    border-top-width: 1px;
    content: var(--tw-content);
    flex: 1 1 0%;
    align-items: center;
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }

  &:after{
    content: var(--tw-content);
    border-top-width: 1px;
    content: var(--tw-content);
    flex: 1 1 0%;
    align-items: center;
    content: var(--tw-content);
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }
`;

function SignUp() {

  const [formData,setFormData]=useState({email:"",password:"",name:""});
  const {email,password,name}=formData;

  const [showPassword,setShowPassword]=useState(false);

  const handleChange=(e)=>{
    setFormData((current)=>({
      ...current,
      [e.target.id]:[e.target.value]
    }))
  }

  const handlePasswordClick=()=>{
    setShowPassword((current)=>!current);
  }
  return (
    <section>
      <H1SignUp>Sign Up</H1SignUp>
      <ContainerDiv>
        <ContainerImage>
            <img className=' w-full rounded-2xl ' src={srcImg} alt="key" ></img>
        </ContainerImage>
        <ContainerForm>
          <form>
            <InputSignUp type='text' id="name" value={name} placeholder='Full name' onChange={handleChange}/>
            <InputSignUp type='email' id="email" value={email} placeholder='Email address' onChange={handleChange}/>
            
            <IconDiv>

              <InputSignUp type={showPassword?'text':'password'} id="password" value={password} placeholder='Password' onChange={handleChange}/>
              
              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={handlePasswordClick}/> : <AiFillEye className='absolute right-3 top-3  text-xl cursor-pointer' onClick={handlePasswordClick}/>}
            </IconDiv>

            <ContainerTextLinks>
              <p>Already have an  account?
                <LinkSignIn href="/sign-in">Sign In</LinkSignIn>
              </p>
            </ContainerTextLinks>
            
            <SignUpButton type='submit'>Sign-Up</SignUpButton>
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