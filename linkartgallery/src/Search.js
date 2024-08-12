import React, { useState } from "react";

function Search({ arts, populateArtList, showError }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        if (value === "") {
            populateArtList(arts); // Show all art if search bar is empty
        } else {
            const filteredArts= books.filter(art =>
                art.title.toLowerCase().includes(value) ||
                art.artist.toLowerCase().includes(value)
            );
            if (filteredArts.length > 0) {
                populateBookList(filteredArts);
            } else {
                showError("No title/artist found matching your search.");
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by title or artist"
            />
        </div>
    );
}

export default Search;
