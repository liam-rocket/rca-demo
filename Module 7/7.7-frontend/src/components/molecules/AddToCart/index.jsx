import React from 'react';

import { Button, Dropdown } from '../../atoms';

const AddToCart = ({ handleClick }) => {
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Dropdown options={quantityOptions} />
      <Button handleClick={handleClick} text="Add to cart" />
    </div>
  );
};

export default AddToCart;
