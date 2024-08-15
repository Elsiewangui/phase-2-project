import React, { useState } from 'react';


const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {// function is called when typing in the search input field.
    const value = e.target.value;
    setSearchTerm(value); 
    onSearch(value); // Passes the search term to the parent
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder='Search by title or artist'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
