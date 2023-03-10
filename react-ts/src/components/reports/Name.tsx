import { FC } from 'react';

interface NameProp {
  name: string;
}

const Name = (props: NameProp) => {
  const { name } = props;
  return <h1>{name}</h1>;
};

export default Name;
