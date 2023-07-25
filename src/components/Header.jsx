import React, { useEffect, useState } from 'react';
import { useLocation , useNavigate} from 'react-router';
import {LiRoute} from "../styledSaas/HeaderCss";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Header() {

  const nevigate=useNavigate();
  const [pageState,setPageState]=useState("Sign in");
  const location=useLocation();

  const auth=getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setPageState("Profile");
      }else{
        setPageState("Sign in");
      }
    })
  },[auth])

  const pathMatchRoute=(route)=>{
    if(route===location.pathname){
      return true;
    }
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img alt="logo" src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" 
               className="h-5 cursor-pointer"
               onClick={()=>nevigate("/")}  />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <LiRoute onClick={()=>nevigate("/")} className={pathMatchRoute('/') ? 'active' : ''}>Home</LiRoute>
            <LiRoute onClick={()=>nevigate("/offers")} className={pathMatchRoute("/offers") ? 'active' : ''}>Offers</LiRoute>
            <LiRoute onClick={()=>nevigate("/profile")} 
                    className={pathMatchRoute("/sign-in")||pathMatchRoute("/profile")? 'active' : ''}>
              {pageState}
            </LiRoute>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header