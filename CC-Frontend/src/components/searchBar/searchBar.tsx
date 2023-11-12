import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <TextField
      fullWidth
      label="Search Categories"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
