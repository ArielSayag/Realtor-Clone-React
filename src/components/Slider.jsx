import React, { useEffect, useState } from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import  {EffectFade , Autoplay, Navigation , Pagination} from "swiper/modules";
import "swiper/css/bundle";
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { ListingNameBlue , ListingNameRed } from '../styledSaas/HomeSliderCss';
function Slider() {

  const [listings,setListing]=useState(null);
  const [loading,setLoading]=useState(true);
  const navigate=useNavigate();

  useEffect(()=>{
    const fetchListings =async()=>{
      const listingsRef=collection(db,"listings")
      const q=query(listingsRef,orderBy("timestamp","desc"),limit(5))
      const querySnap=await getDocs(q);
      let listingsArr=[];
      querySnap.forEach((doc)=>{
        return listingsArr.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListing(listingsArr)
      setLoading(false)
    }

    fetchListings()
  },[])

  if(loading){
    return <Spinner />
  }

  if(listings.length=== 0 || listings===null){
    return <></>;
  }
  

  return listings && <>
     <Swiper  
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        autoplay={{ delay: 3000 }} 
        modules={[EffectFade,Autoplay, Navigation, Pagination]}>
        {listings.map((listing)=>(
          <SwiperSlide key={listing.id} onClick={()=>navigate(`/category/${listing.data.type}/${listing.id}`)}>
            <div className='relative w-full overflow-hidden h-[300px]' style={{background:`url(${listing.data.imgUrls[0]}) center no-repeat`,backgroundSize:"cover"}}></div>
              <ListingNameBlue>
                {listing.data.name}
              </ListingNameBlue>
              <ListingNameRed>
                ${listing.data.discountedPrice ?? listing.data.regularPrice}
                {listing.data.type === "rent" && " / month"}
              </ListingNameRed>
          </SwiperSlide>
        ))}
      </Swiper>
  </>;
}

export default Slider

