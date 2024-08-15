
import React from "react";

function ArtworkDetails({art,addToMyCart,addToMyWishList}){
  //child component receives the art object, addToMyCart, and addToMyWishList functions as props from app which is parent component.
  
    return(
      <div className="art-profile">
        
          <img src={art.imageUrl} width="100vw" alt={`${art.title} profile`} className="art-image"/>
          <p>{art.title}</p>
          <p>{art.artist}</p>
          <p>{art.year}</p>
          <p>{art.description}</p>
          <p>{art.price}</p>
          
          <button onClick={() => addToMyCart(art)}>Add to My Cart</button>
          <button onClick={() => addToMyWishList(art)}>Add to My Wishlist</button>
        </div>
    
    
    )}

  

export default ArtworkDetails