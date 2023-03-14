import { FC, useState, FormEvent, ChangeEvent } from 'react';

interface EmailProp {
  email: string;
  bootcamp?: Bootcamp;
  handleClick: (name: string) => string;
}

interface Bootcamp {
  name: string;
  size: number;
}

const Email: FC<EmailProp> = ({ email, handleClick }) => {
  const [text, setText] = useState<string>('hello');

  return (
    <>
      <h1>{email}</h1>
      <h3>{text}</h3>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />
      <button
        onClick={() => {
          const nextText = handleClick(email);
          setText(nextText);
        }}
      >
        Click me
      </button>
    </>
  );
};

export default Email;
