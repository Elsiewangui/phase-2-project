import React,{useState} from "react"
import ArtworkDetails from "./ArtworkDetails"; 


function Gallery({ arts, addToMyCart,addToMyWishList }) {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleSelectArt = (art) => {//function is called when an artwork is selected.
    setSelectedArt(art);
  };

  const handleCloseDetails = () => {
    setSelectedArt(null); // function is called when the user wants to close the details view deselecting the artwork.
  };

  return(
  <div className={`gallery-container ${selectedArt ? 'blur-background' : ''}`}>
  <div className="art-collection">
    {arts.map((art) => (
      <div key={art.id} className="art-profile" onClick={() => handleSelectArt(art)}>
        <img src={art.imageUrl} width="200" alt={`${art.title} profile`} className="art-image" />
        <p>{art.title}</p>
        <p>{art.artist}</p>
      </div>
    ))}
  </div>
  {selectedArt && (
        <div className="artwork-details-overlay">
          <ArtworkDetails art={selectedArt} addToMyCart={addToMyCart} addToMyWishList={addToMyWishList}/>
          <button className="close-details" onClick={handleCloseDetails}>x</button>
        </div>
      )}
  
 
</div>
);
}

export default Gallery
