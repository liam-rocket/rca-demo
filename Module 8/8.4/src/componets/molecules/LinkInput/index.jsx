import React, { useState } from 'react';

import { Input, Button } from '../../atoms';

const LinkInput = ({ addLink }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    addLink(inputValue);
  };

  return (
    <div>
      <Input value={inputValue} setValue={setInputValue} />
      <Button text="Submit" handleClick={handleClick} />
    </div>
  );
};

export default LinkInput;
