import React from 'react';

const Dropdown = ({ options }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
