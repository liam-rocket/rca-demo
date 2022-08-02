import React from 'react';

const LinkList = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li>
          <a href={link}>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
