import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (//Conditional Rendering: This checks if the cart array is empty 
        <p>Your cart is empty</p>
      ) : (
        cart.map((art, id) => (
          <div key={id}>
            <img src={art.imageUrl} width="300" alt={art.title} />
            <h3>{art.title}</h3>
            <p>{art.description}</p>
            <button onClick={() => removeFromCart(art.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
