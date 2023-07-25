import React from 'react'
import { Outlet , Navigate} from 'react-router';
import useAuthStatus from '../hooks/useAuthStatus';
import Spinner from './Spinner';

function PrivateRoute() {

  const {loggin,checkingStatus}=useAuthStatus();
  if(checkingStatus){
    return <Spinner />
  }
  return loggin ? <Outlet/> : <Navigate to="/sign-in" />
}

export default PrivateRoute