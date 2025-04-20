import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';




const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = async (event, newInputValue) => {
      setInputValue(newInputValue);
      onSearch(newInputValue); // Pass the search input value to the parent component
    };
  
    return (
      <Autocomplete
        freeSolo
        options={[]}
        inputValue={inputValue}
        onInputChange={handleInputChange} // Trigger the handleInputChange when typing
        renderInput={(params) => (
          <TextField {...params} label="Search Job" variant="outlined" fullWidth />
        )}
      />
    );
  };
  
  export default SearchBar;