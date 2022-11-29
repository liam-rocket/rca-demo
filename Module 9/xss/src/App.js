import './App.css';
import { useState } from 'react';

function App() {
  const [validationMessage, setValidationMessage] = useState('');

  const validateMessage = async () => {
    setTimeout(() => {
      setValidationMessage(
        `Invalid referral code, <script>alert('hello');</script>`
      );
    }, 1000);
  };

  return (
    <div className="App">
      <input placeholder="Enter your referral code" />
      <button onClick={validateMessage}>Enter</button>
      <div>{validationMessage}</div>
    </div>
  );
}

export default App;
