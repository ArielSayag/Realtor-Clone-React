import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import {ContentDiv,TextArea,Button} from "../styledSaas/ContentCss";

function Content({userRef,listing}) {

  const [landlord,setLandLord]=useState(null);
  const [message, setMessage] = useState("");

  useEffect(()=>{
    const getLandlord=async ()=>{
      const docRef=doc(db,"users",userRef);
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
        setLandLord(docSnap.data());
      }else{
        toast.error("Could not get landlord data");
      }
    }
    getLandlord();
  },[userRef])

  function onChange(e) {
    setMessage(e.target.value);
  }



  return (
    <>
    {landlord !== null && (
      <ContentDiv>
        <p>
          Contact <span className='font-bold'> {landlord.name}  </span>  for the {listing.name.toLowerCase()}
        </p>
        <div className="mt-3 mb-6">
          <TextArea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}></TextArea>
        </div>
        <a
          href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
        >
          <Button type="button">
            Send Message
          </Button>
        </a>
      </ContentDiv>
    )}
  </>
  )
}

export default Content
