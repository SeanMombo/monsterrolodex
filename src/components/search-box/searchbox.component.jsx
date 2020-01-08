import React from 'react';
import './searchbox.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        class='search' 
        placeholder={ placeholder }
        onChange={ handleChange }
    />
);