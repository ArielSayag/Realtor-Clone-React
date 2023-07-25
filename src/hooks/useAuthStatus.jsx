import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'

function useAuthStatus() {

  const [loggin,setLoggin]=useState(false);
  const [checkingStatus,setCheckingStatus]=useState(true);

  useEffect(()=>{
    const auth= getAuth();
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggin(true);
      }
      setCheckingStatus(false);
    })
  },[])

  return {loggin,checkingStatus};
}

export default useAuthStatus