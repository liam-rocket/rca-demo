import React from 'react';

export default function ListItem({ items }) {
  // Return JSX to render
  return (
    <div>
      {items.map((item) => (
        <h5>{item.name}</h5>
      ))}
    </div>
  );
}
