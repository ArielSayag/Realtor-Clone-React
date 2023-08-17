import React from 'react'

function ListingItem({listing,id}) {
  return (
    <li key={id} value={listing.name}>{listing.name}</li>
  )
}

export default ListingItem