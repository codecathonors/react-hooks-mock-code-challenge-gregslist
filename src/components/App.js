import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);


  // const getListings = () => {
  //   return fetch("http://localhost:6001/listings"), {
  //     method: 'GET', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //     .then(res => {
  //       return res.json()})
  //     .then(data => {
  //       return JSON.stringify(data);
  //     })

  // };

  const handleTrashedItem = (deletedItem) => {
    const updatedListings = setListings(listings.filter(listing => listing !== deletedItem))
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(listings => setListings(listings));
    }, [])

    // fetch("http://localhost:6001/listings")
    //   .then(res => res.json())
    //   .then(listings => setListings(listings))
 
    //can set listings here, so I need to have a function to reset listings including the delete

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={updatedListings} handleTrashedItem={handleTrashedItem}/>
    </div>
  );
}

export default App;
