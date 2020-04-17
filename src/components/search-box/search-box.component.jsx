import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholders, handleChange}) => (
    <input
      type= 'search'
      className= 'search'
      placeholder= {placeholders}
      onChange = {handleChange}
    />
)