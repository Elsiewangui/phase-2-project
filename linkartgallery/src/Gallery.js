import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ArtworkDetails from "./ArtworkDetails";

function Gallery({ arts, addToMyCart, addToMyWishList, purchased }) {
  const [selectedArt, setSelectedArt] = useState(null);
  const navigate = useNavigate();

  const handleSelectArt = (art) => {
    if (!isSold(art.id)) {
      setSelectedArt(art);
    }
  };

  const handleCloseDetails = () => {
    setSelectedArt(null);
  };

  const handleAddToMyCart = (art) => {
    addToMyCart(art);
    navigate('/cart');
  };

  const handleAddToMyWishList = (art) => {
    addToMyWishList(art);
    navigate('/wishlist');
  };

  const isSold = (artId) => {
    return purchased.some((art) => art.id === artId);
  };

  return (
    <div className={`gallery-container ${selectedArt ? 'blur-background' : ''}`}>
      <div className="art-collection">
        {arts.map((art) => {
          const sold = isSold(art.id);
          return (
            <div
              key={art.id}
              className={`art-profile ${sold ? 'sold' : ''}`}
              onClick={() => handleSelectArt(art)}
              style={{ cursor: sold ? 'not-allowed' : 'pointer' }}
            >
              <img src={art.imageUrl} width="200" alt={`${art.title} profile`} className="art-image" />
              <p>{art.title}</p>
              <p>{art.artist}</p>
              {sold && <span className="sold-label">SOLD</span>}
            </div>
          );
        })}
      </div>
      {selectedArt && (
        <div className="artwork-details-overlay">
          <ArtworkDetails
            art={selectedArt}
            addToMyCart={handleAddToMyCart}
            addToMyWishList={handleAddToMyWishList}
          />
          <button className="close-details" onClick={handleCloseDetails}>x</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
