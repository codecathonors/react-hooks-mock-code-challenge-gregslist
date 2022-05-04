import React, { useState } from "react";

function ListingCard( { handleTrashedItem, description, image=("https://via.placeholder.com/300x300"), location } ) {
  
  const [isFavorited, setIsFavorited] = useState(false);
  const [trashed, setTrashed] = useState(false);

  const handleFavorited = () => {
    setIsFavorited(isFavorited => !isFavorited)
  }

  const handleIsTrashed = (e) => {
    handleTrashedItem(e.target.value)
  }

  //need event listener for click, but need access to listings in App
  //delete request???

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
          <button onClick={handleFavorited} className={isFavorited ? "emoji-button favorite active" : "emoji-button favorite"}>
            {isFavorited ? "★" : "☆"}
          </button>
        
      
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleIsTrashed}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
