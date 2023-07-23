import React from 'react';
import {FcGoogle} from "react-icons/fc";

function OAuth() {
  return (
    <button className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase rounded text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out'>
      <FcGoogle className='text-2xl bg-white  rounded-full mr-2'/>
      Continue with GOOGLE 
    </button>
  )
}

export default OAuth