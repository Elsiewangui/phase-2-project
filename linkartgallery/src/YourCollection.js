import React from "react";

function Collection({ items }) {
  return (
    <div className="collection-container">
      <h2>Purchased Collection</h2>
      {items.length === 0 ? (
        <p>No items in your collection.</p>
      ) : (
        <div className="collection-grid">
          {items.map((item) => (
            <div key={item.id} className="collection-item">
              <img src={item.imageUrl} alt={item.title} className="collection-item-image" />
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
