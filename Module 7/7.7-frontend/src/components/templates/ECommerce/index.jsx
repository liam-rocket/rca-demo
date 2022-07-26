import React, { useState } from 'react';

import { Title, Heading, Description } from '../../atoms';
import { Items, AddToCart, Cart } from '../../molecules';

const ECommerce = ({ items, getItem, currentItem, loading }) => {
  const selectItem = (itemId) => {
    getItem(itemId);
  };

  const [itemTally, setItemTally] = useState({});

  const handleAddToCart = (item, amount) => {
    const itemName = item.name;
    const itemPrice = item.price;
    const quantity = amount;

    const newItemTally = { ...itemTally };

    if (newItemTally[itemName]) {
      const quantity = newItemTally[itemName].quantity;
      newItemTally[itemName].quantity = quantity + amount;
    } else {
      newItemTally[itemName] = {
        price: itemPrice,
        quantity: quantity,
      };
    }

    setItemTally(newItemTally);
  };

  return (
    <>
      <Title text="Wow Shopping!" />
      <div className="e-commerce-wrapper">
        {/* component 1 */}
        <Items items={items} handleClick={selectItem} />
        {/* component 2 */}
        {/* assembling the item detail in the tempalte */}
        <div className="item-details-wrapper">
          {loading ? (
            <>Loading...</>
          ) : (
            <>
              <Heading text={currentItem && currentItem.name} />
              <Description text={currentItem && currentItem.description} />
              <AddToCart
                currentItem={currentItem}
                handleClick={handleAddToCart}
              />
            </>
          )}
        </div>
        {/* component 3 */}
        <Cart itemTally={itemTally} />
      </div>
    </>
  );
};

export default ECommerce;

// React.Fragment
// Fragment
// <>
