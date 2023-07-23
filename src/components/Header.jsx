import React from 'react';
import styled from '@emotion/styled';
import { useLocation , useNavigate} from 'react-router';

const LiRoute=styled.li`
  padding-top: 0.75rem;
  cursor: pointer;
  padding-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
  border-bottom-width: 3px;
  border-bottom-color: transparent;

  &.active {
    color: black;
    border-bottom-color: red;
  }
`;

function Header() {

  const nevigate=useNavigate();

  const location=useLocation();
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
            <LiRoute onClick={()=>nevigate("/sign-in")} className={pathMatchRoute("/sign-in") ? 'active' : ''}>Sign In</LiRoute>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header