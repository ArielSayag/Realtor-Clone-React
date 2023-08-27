import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider';
import {UlSection,DivSection,H2,PSection} from "../styledSaas/HomeCss";
import { db } from '../firebase';
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';


function Home() {
   // Offers
   const [offerListings, setOfferListings] = useState(null);

   useEffect(() => {
      const fetchListings=async()=> {
       try {
         // get reference
         const listingsRef = collection(db, "listings");
         // create the query
         const q = query(
           listingsRef,
           where("offer", "==", true),
           orderBy("timestamp", "desc"),
           limit(4)
         );
         // execute the query
         const querySnap = await getDocs(q);
         const listings = [];
         querySnap.forEach((doc) => {
           return listings.push({
             id: doc.id,
             data: doc.data(),
           });
         });
         setOfferListings(listings);
       } catch (error) {
         console.log(error);
       }
     }
     fetchListings();
   }, []);

   const [rentListings,setRentListings]=useState(null);

   useEffect(()=>{
      const fetchListings=async()=>{
        try {
          const listingsRef = collection(db, "listings");
          // create the query
          const q = query(
            listingsRef,
            where("type", "==", "rent"),
            orderBy("timestamp", "desc"),
            limit(4)
          );
          // execute the query
          const querySnap = await getDocs(q);
          const listings = [];
          querySnap.forEach((doc) => {
            return listings.push({
              id: doc.id,
              data: doc.data(),
            });
          });
          setRentListings(listings);
        } catch (error) {
          console.log(error);
        }
      }
      fetchListings();
   },[])

   const [saleListings,setSaleListings]=useState(null);
   useEffect(()=>{
    const fetchListings=async()=>{
    try {
        const listingsRef=collection(db,"listings");
        const q=query(
          listingsRef,
          where("type","==","rent"),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setSaleListings(listings);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListings()
   },[])
  
  return (
    <div><Slider />
      {offerListings && offerListings.length > 0 && (
          <DivSection>
            <H2 >Recent offers</H2>
            <Link to="/offers">
              <PSection>
                Show more offers
              </PSection>
            </Link>
            <UlSection>
              {offerListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </UlSection>
          </DivSection>
        )}    
         {rentListings && rentListings.length > 0 && (
          <DivSection>
            <H2 >Places for rent</H2>
            <Link to="/category/rent">
              <PSection>
              Show more places for rent
              </PSection>
            </Link>
            <UlSection>
              {rentListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </UlSection>
          </DivSection>
        )}   
         {saleListings && saleListings.length > 0 && (
          <DivSection>
            <H2 >Places for sale</H2>
            <Link to="/category/sale">
              <PSection>
              Show more places for sale
              </PSection>
            </Link>
            <UlSection>
              {saleListings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                />
              ))}
            </UlSection>
          </DivSection>
        )}     
    </div>
  )
}

export default Home;

