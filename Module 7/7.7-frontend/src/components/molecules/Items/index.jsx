import React from 'react';
import { Button } from '../../atoms';

const Items = ({ items, handleClick }) => {
  return (
    <div className="items-wrapper">
      {items.map((item) => (
        <Button text={item.name} handleClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default Items;
