import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const apiCall = () => {
    setTimeout(() => {}, 2000);
    return '<script>alert("you have been hacked !");</script>';
  };

  const makeApiCall = () => {
    const potentiallyMaliciousCode = apiCall();
    setMessage(potentiallyMaliciousCode);
  };

  return (
    <div className="App">
      <input placeholder="Enter your referral code" />
      <button onClick={makeApiCall}>Enter</button>
      <div>{message}</div>
    </div>
  );
}

export default App;
