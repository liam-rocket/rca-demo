import React from 'react';

const Dropdown = ({ options, handleChange }) => {
  return (
    <select onChange={handleChange}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
