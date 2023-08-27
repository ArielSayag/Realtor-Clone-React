import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner";
import { db } from '../firebase';
import { collection, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import styled from '@emotion/styled';
import { MainDiv , H1 ,UlOffers , SecondDiv ,Button  } from "../styledSaas/OfferCss";
import ListingItem from '../components/ListingItem';
import { toast } from 'react-toastify';


function Offers() {

  const [listings,setListings]=useState(null);
  const [loading,setLoading]=useState(true);
  const [lastFetchedListing, setLastFetchListing] = useState(null);

  useEffect(()=>{
    const fetchListings=async()=>{
      try {
        const listingRef=collection(db,"listings");
        const q = query(
          listingRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(8)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchListing(lastVisible);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings()
  },[])

  const onFetchMoreListings=async()=> {
    try {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(4)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchListing(lastVisible);
      const listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings((prevState)=>[...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listing");
    }
  }


  if(loading){
    return <Spinner />
  }

  return (

    <MainDiv>
      <H1>Offers</H1>
      {
        loading ? (<Spinner/>) : (listings && listings.length>0 ) ? (
          <>
          <main>
            <UlOffers>
              {listings.map((listing)=>(
                <ListingItem key={listing.id} id={listing.id} listing={listing.data} />
              ))}
            </UlOffers>
          </main>
            {lastFetchedListing && (
              <SecondDiv>
                <Button onClick={onFetchMoreListings}>
                  Load more
                </Button>
              </SecondDiv>
            )}
            </>
        ) : (<p> There are no current offers</p>)
      }
    </MainDiv>
  )
}

export default Offers

