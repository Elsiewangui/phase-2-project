import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'; //handle client side routing
import NavBar from "./NavBar";
import Search from "./Search"
import Gallery from "./Gallery";
import Cart from "./Cart";
import About from "./About";
import WishList from "./WishList";



function App() {
  const [arts, setArts] = useState([])//nitializes arts state as an empty array
  const [cart, setCart] = useState([])//state holds the items added to the cart.
  const [wishlist, setWishlist] = useState([])//state holds the items added to the wishlist
  const [filteredArts, setFilteredArts] = useState([])//state holds the list of artworks filtered based on the search input

  useEffect(() => {
    fetch('http://localhost:4000/artdata')
      .then(response => response.json())
      .then(data => {
        setArts(data)
        setFilteredArts(data); //  shows all arts by default
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);




// Filter art based on the search term
const handleSearch = (searchTerm) => {
  const filtered = arts.filter(art =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredArts(filtered);
}
//Addding artwork to the cart
const addToMyCart = (art) => {
  if (!cart.some(a => a.id === art.id)) {//Checks if the artwork is not already in the cart (by comparing IDs).
    setCart([...cart, art]);
  }
}

//remove an artwork from the cart.
  const removeFromCart = (id) => {
    const newCart = cart.filter(art => art.id !== id)
    setCart(newCart)
  };
  //add an artwork to the wishlist
  const addToMyWishList = (art) => {
    if (!wishlist.some(a => a.id === art.id)) {
      setWishlist([...wishlist, art])
    } else {
      console.log(`${art.title} is already in the wishlist.`)
    }
  };
  
  //removes the artwork from the wishlist
  const removeFromWishList = (id) => {
    const newWishlist = wishlist.filter(art => art.id !== id)
    setWishlist(newWishlist)
  };

  return (
    <div>
      <h1>LINKART STUDIO</h1>
      <NavBar />
      <Search onSearch={handleSearch} />
      <Routes>
        <Route path="/gallery" 
          element={<Gallery arts={filteredArts}addToMyCart={addToMyCart} addToMyWishList={addToMyWishList}/>} 
        />
        <Route path="/cart" 
        element={<Cart cart={cart} removeFromCart={removeFromCart} />} 
        />
        <Route path="/about" 
        element={<About />}
        />
        <Route path="/wishlist" 
          element={<WishList wishlist={wishlist} removeFromWishList={removeFromWishList} />} 
        />

      </Routes>
    </div>
  );
}

export default App;
