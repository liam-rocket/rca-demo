import React, { useState } from 'react';

import { Button, Dropdown } from '../../atoms';

const AddToCart = ({ currentItem, handleClick }) => {
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleButtonClick = () => {
    handleClick(currentItem, amount);
  };

  return (
    <div>
      <Dropdown handleChange={handleChange} options={quantityOptions} />
      <Button handleClick={handleButtonClick} text="Add to cart" />
    </div>
  );
};

export default AddToCart;
