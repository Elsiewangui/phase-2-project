import React from 'react';

function WishList({ wishlist, removeFromWishList }) {
  return (
    <div className='my-wishlist'>
      <h2>My WishList</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
          wishlist.map((art, id) => (
            <div key={id}>
                <img src={art.imageUrl} width="300" alt={art.title} />
                <h3>{art.title}</h3>
                <p>{art.description}</p>
                <button onClick={() => removeFromWishList(art.id)}>Remove</button>
              </div>
            
          ))
    
      )}
    </div>
  );
}

export default WishList;
