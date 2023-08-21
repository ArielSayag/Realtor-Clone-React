import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getAuth } from "firebase/auth";
import { db } from '../firebase';
import Spinner from '../components/Spinner';
import { Swiper,SwiperSlide } from "swiper/react";
import SwiperCore, {EffectFade , Autoplay, Navigation , Pagination} from "swiper/modules";
import "swiper/css/bundle";
import { FaShare, FaMapMarkerAlt, FaBed, FaBath, FaParking, FaChair} from "react-icons/fa";
import {ListingLi ,ListingUl , ShareIconDiv , CopiedText , MainDiv ,LeftDiv , ListingName ,ListingAddress ,MainDivOffer , ListingType ,ListingOffer} from "../styledSaas/ListingCss";
import Contact from "../components/Content";
import styled from '@emotion/styled';

function Listing() {

  const params=useParams();
  const auth=getAuth();
  const [listing,setListing]=useState(null);
  const [loading,setLoading]=useState(true);
  // SwiperCore.use([Autoplay,Navigation,Pagination]);

  const [shareLinkCopied,setShareLinkCopied]=useState(false);
  const [contactLandlord,setContactLandlord]=useState(false)

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


      <MainDiv>
        <LeftDiv>
          <ListingName>
            {listing.name} - ${listing.offer ? listing.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") 
              : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") }
            {listing.type==="rent" && " / month"}
          </ListingName>

          <ListingAddress>
            <FaMapMarkerAlt className='text-green-700 mr-1' />
            {listing.address}
          </ListingAddress>

          <MainDivOffer>
            <ListingType>
              {listing.type==="rent"?"Rent":"Sale"}
            </ListingType>
            {listing.offer && (
                <ListingOffer >${(+listing.regularPrice)-(+listing.discountPrice)} discount</ListingOffer>
            )}
          </MainDivOffer>

          <p className='mt-3 mb-3 '> 
            <span className='font-semibold '>
              Description - 
            </span> 
            {listing.description}
          </p>
          <div className='flex'>
            <ListingUl> 
              <ListingLi>
                <FaBed className="text-lg mr-1" />
                {+listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}
              </ListingLi>

              <ListingLi>
                <FaBath className="text-lg mr-1" />
                {+listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}
              </ListingLi>

              <ListingLi>
                <FaParking className="text-lg mr-1" />
                {listing.parking ? "Parking spot" : "No parking"}
              </ListingLi>

              <ListingLi>
                <FaChair className="text-lg mr-1" />
                {listing.furnished ? "Furnished" : "Not furnished"}
              </ListingLi>
            </ListingUl>

          </div>
          {listing.userRef !== auth.currentUser?.uid && !contactLandlord && (
            <div className="mt-6">
              <button
                onClick={() => setContactLandlord(true)}
                className="px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg w-full text-center transition duration-150 ease-in-out "
              >
                Contact Landlord
              </button>
            </div>
          )}
          {contactLandlord && (
            <Contact userRef={listing.userRef} listing={listing} />
          )}
        </LeftDiv>


        <div className='bg-blue-500 w-full h-[200px] lg-[400px] z-10 overflow-x-hidden'> 

        </div>
      </MainDiv>
    </main>
  )
}

export default Listing;

