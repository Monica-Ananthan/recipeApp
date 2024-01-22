import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='search-box'>
      <input
        type="text"
        placeholder="Enter ingredients or dish names"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton 
        aria-label="search" 
        size="small"
        onClick={handleSearch}
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};

export default SearchBar;
