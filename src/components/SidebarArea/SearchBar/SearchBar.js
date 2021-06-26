import React from 'react';
import SearchField from 'react-search-field';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="searchBar">
            <SearchField 
            placeholder='Search item'
            />
        </div>
    );
};

export default SearchBar;