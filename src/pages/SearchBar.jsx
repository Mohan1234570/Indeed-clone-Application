



import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleInputChange = async (event, newInputValue) => {
    setInputValue(newInputValue);
    onSearch(newInputValue);

    if (newInputValue.trim() === '') {
      setOptions([]);
      return;
    }

    const jwtToken = localStorage.getItem('token');
    if (!jwtToken) {
      console.error('JWT token not found');
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/posts/search?query=${encodeURIComponent(newInputValue)}`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );

      // Extract just the titles or relevant strings
      const titles = Array.isArray(response.data)
        ? response.data.map((post) => post.title || '')
        : [];

      setOptions(titles);
    } catch (error) {
      console.error('Error fetching search options:', error.response?.data || error.message);
      setOptions([]);
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={options}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Search Job" variant="outlined" fullWidth />
      )}
    />
  );
};

export default SearchBar;
