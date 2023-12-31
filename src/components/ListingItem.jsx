import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import {MdLocationOn , MdEdit} from 'react-icons/md';
import { LiMyList ,ImgMyList ,FooterDiv,FooterDivIcon,AddressText,NameText,PriceText,FooterBottomDiv,FooterBottomSeconde,FooterText } from "../styledSaas/ListingItemCss";
import {FaTrash} from "react-icons/fa";


function ListingItem({listing,id,onDelete,onEdit}) {
  return (
    <LiMyList>
      <Link className='content' to={`/category/${listing.type}/${id}`}>
        <ImgMyList  loading='lazy' src={listing.imgUrls[0]} alt="main post image" /> 
        <Moment className='absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg' fromNow>
          {listing.timestamp?.toDate()}
        </Moment>
        <FooterDiv>
          <FooterDivIcon>
            <MdLocationOn className='h-4 w-4 text-green-600'/>
            <AddressText >{listing.address}</AddressText>
          </FooterDivIcon>
          <NameText>{listing.name}</NameText>
          <PriceText>${listing.offer ? listing.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") 
              : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",") }
          {listing.type==="rent" && " / month"}
          </PriceText>
          <FooterBottomDiv>
            <FooterBottomSeconde>
              <FooterText>{listing.bedrooms>1 ? `${listing.bedrooms} Beds` : "1 Bed"}</FooterText>
            </FooterBottomSeconde>
            <FooterBottomSeconde>
              <FooterText>{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</FooterText>
            </FooterBottomSeconde>
          </FooterBottomDiv>

            
        </FooterDiv>
      </Link>
      {onDelete && (<FaTrash onClick={()=>onDelete(listing.id)} className='absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500' />)}
      {onEdit && (<MdEdit onClick={()=>onEdit(listing.id)} className='absolute bottom-2 right-8 h-4 cursor-pointer' />)}
    </LiMyList>
  )
}

export default ListingItem