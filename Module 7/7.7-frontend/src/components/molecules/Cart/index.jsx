import React from 'react';

import { Heading } from '../../atoms';

const Cart = ({ itemTally }) => {
  let subtotal = 0;
  const arrayOfItems = [];

  for (const [key, value] of Object.entries(itemTally)) {
    const cartItem = {
      quantity: value.quantity,
      totalPrice: Number(value.quantity * value.price),
      name: key,
    };

    subtotal = subtotal + cartItem.totalPrice;
    arrayOfItems.push(cartItem);
  }

  return (
    <div className="cart-wrapper">
      <Heading text="Cart" />

      {arrayOfItems.map((item) => (
        <div>
          {item.quantity} | {item.name} ${item.totalPrice}
        </div>
      ))}

      <h4>Subtotal: ${subtotal}</h4>
      <h4>GST: $200</h4>
      <h1>Total: ${subtotal + 200}</h1>
    </div>
  );
};

export default Cart;
