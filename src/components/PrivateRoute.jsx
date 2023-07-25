import React from 'react'
import { Outlet , Navigate} from 'react-router';
import useAuthStatus from '../hooks/useAuthStatus';

function PrivateRoute() {

  const {loggin,checkingStatus}=useAuthStatus();
  if(checkingStatus){
    return <h3>Loading..</h3>
  }
  return loggin ? <Outlet/> : <Navigate to="/sign-in" />
}

export default PrivateRoute