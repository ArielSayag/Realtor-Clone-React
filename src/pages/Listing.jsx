import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore, {EffectFade , Autoplay, Navigation , Pagination} from "swiper/modules";
import "swiper/css/bundle";
import { FaShare, FaMapMarkerAlt, FaBed, FaBath, FaParking, FaChair} from "react-icons/fa";
import {ShareIconDiv , CopiedText} from "../styledSaas/ListingCss";
import styled from '@emotion/styled';

function Listing() {

  const params=useParams();
  const [listing,setListing]=useState(null);
  const [loading,setLoading]=useState(true);
  // SwiperCore.use([Autoplay,Navigation,Pagination]);

  const [shareLinkCopied,setShareLinkCopied]=useState(false);

  useEffect(()=>{
    const fetchListing = async() =>{
      const docRef=doc(db,"listings", params.listingId);
      const docSnap=await getDoc(docRef);
      if(docSnap.exists()){
        setListing(docSnap.data());
        setLoading(false);
      }
    }

    fetchListing();
  },[params.listingId])

  if(loading){
    return <Spinner/>
  }

  return (
    <main>
      <Swiper  
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        autoplay={{ delay: 3000 }} 
        modules={[EffectFade,Autoplay, Navigation, Pagination]}>
        {listing.imgUrls.map((url,index)=>(
          <SwiperSlide key={index}>
            <div className='relative w-full overflow-hidden h-[300px]' style={{background:`url(${listing.imgUrls[index]}) center no-repeat`,backgroundSize:"cover"}}></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ShareIconDiv 
        onClick={()=>{
          navigator.clipboard.writeText(window.location.href)
          setShareLinkCopied(true);
          setTimeout(()=>{
            setShareLinkCopied(false)
          },2000)
        }}>
        <FaShare className='text-lg text-slate-500'/>
      </ShareIconDiv>
      {shareLinkCopied && (
        <CopiedText>
          Link copied!
        </CopiedText>
      )}

    </main>
  )
}

export default Listing;

