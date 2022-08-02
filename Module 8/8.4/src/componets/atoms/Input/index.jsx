import React from 'react';

const Input = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input value={value} onChange={handleChange} />;
};

export default Input;
