import React, { useState } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const [query, setQuery] = useState(searchTerm);

    const handleSearch = () => {
        setSearchTerm(query); 
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); 
        }
    };

    return (
        <div className="mb-4 flex flex-col items-center">
            <h1 className="text-2xl font-semibold mb-2 text-center">How can we help?</h1>
            <div className="relative w-full md:w-96">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="p-2 pr-10 border border-gray-500 rounded-md w-full focus:outline-none"
                />
                <button
                    type="button"
                    onClick={handleSearch} 
                    className="absolute right-3 text-2xl md:text-3xl lg:text-3xl top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                    <IoIosArrowRoundForward />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;


