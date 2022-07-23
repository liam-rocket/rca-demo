import React, { useState } from 'react';

import { Title, Heading, Description } from '../../atoms';
import { Items, AddToCart } from '../../molecules';

const ECommerce = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(null);

  const selectItem = (item) => {
    setCurrentItem(item);
  };

  console.log('currentItem: ', currentItem);

  return (
    <>
      <Title text="Wow Shopping!" />
      <div className="e-commerce-wrapper">
        {/* component 1 */}
        <Items items={items} handleClick={selectItem} />

        {/* component 2 */}
        {/* assembling the item detail in the tempalte */}
        <div className="item-details-wrapper">
          <Heading text={currentItem && currentItem.name} />
          <Description text={currentItem && currentItem.description} />
          <AddToCart />
        </div>
      </div>
    </>
  );
};

export default ECommerce;

// React.Fragment
// Fragment
// <>
