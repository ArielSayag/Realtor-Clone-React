import React from 'react';
import {FcGoogle} from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import {getAuth} from "firebase/auth";
import { useNavigate } from 'react-router';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

function OAuth() {
  
  const navigate=useNavigate();
  const handleGoogleClick=async()=>{
    
    try {
      const auth=getAuth();
      const provider = new GoogleAuthProvider();
      const result=await signInWithPopup(auth,provider);
      const user=result.user;

      //check if the user already exists.
      const docRef=doc(db,"users",user.uid)
      const docSnap=await getDoc(docRef);

      //add to db
      if(!docSnap.exists()){
        await  setDoc(docRef,{
          name: user.displayName,
          email:user.email,
          timestamp:serverTimestamp(),
        });
      }
      
      toast.success("Sign Up was successful")
      navigate("/");

    } catch (error) {
       toast.error("Could not authorize with Google.")
    }
  }

  return (
    <button type='button' onClick={handleGoogleClick} className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out'>
      <FcGoogle className='text-2xl bg-white  rounded-full mr-2'/>
      Continue with GOOGLE 
    </button>
  )
}

export default OAuth