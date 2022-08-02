import React, { useState } from 'react';

import { LinkInput, LinkList } from '../../molecules';

const ReadLater = () => {
  const [links, setLinks] = useState([]);

  const addLink = (newLinkToAdd) => {
    setLinks([...links, newLinkToAdd]);
  };

  return (
    <>
      <LinkInput addLink={addLink} />
      <LinkList links={links} />
    </>
  );
};

export default ReadLater;
