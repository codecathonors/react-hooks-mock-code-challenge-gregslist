import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, handleTrashedItem } ) {
  const singleListing = listings.map(listing => (
    <ListingCard 
      description={listing.description}
      image={listing.image}
      location={listing.location}
      handleTrashedItem={handleTrashedItem}/>
  ))
  
 

  return (
    <main>
      <ul className="cards">
        {singleListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
