import React, { useState } from 'react';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { InputForm ,LinkRed,LinkBlue, H1,ContainerDiv , ContainerImage , ContainerForm,ContainerTextLinks , SubmitFormButton , ORdiv } from '../styledSaas/SignCss';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

const srcImg="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80";



function ForgotPassword() {

  const [email,setEmail]=useState("");
  // const nevigation=useNavigate();

  const handleChange=(e)=>{
    const mail=e.target.value;
    setEmail(mail);
  }

  const handleForgotPasswordSubmit=async(e)=>{
    e.preventDefault();

    try {
      const auth=getAuth();
      await sendPasswordResetEmail(auth,email);
      toast.success("Email was sent.")
    } catch (error) {
      toast.error("Could not send reset password.")
    }
  }

  return (
    <section>
      <H1>Forgot Password</H1>
      <ContainerDiv>
        <ContainerImage>
            <img className=' w-full rounded-2xl ' src={srcImg} alt="key" ></img>
        </ContainerImage>
        <ContainerForm>
          <form onSubmit={handleForgotPasswordSubmit}>
            <InputForm type='email' id="email" value={email} placeholder='Email address' onChange={handleChange}/>
            <ContainerTextLinks>
              <p>Don't have an account?
                <LinkRed href="/sign-up">Register</LinkRed>
              </p>
              <p>
                <LinkBlue href="/sign-in">Sign In instead?</LinkBlue>
              </p>
            </ContainerTextLinks>
            
            <SubmitFormButton type='submit'>Send Rest Password</SubmitFormButton>
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


export default ForgotPassword;