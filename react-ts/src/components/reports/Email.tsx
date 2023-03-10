import { FC } from 'react';

interface EmailProp {
  email: string;
}

const Email: FC<EmailProp> = (props) => {
  const { email } = props;
  return <h1>{email}</h1>;
};

export default Email;
