import React, { useState, useReducer, useEffect } from 'react';
import { register } from '../../api/authentication';

const Register = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const registerUser = async () => {
    const user = await register(state.email, state.password);
    console.log({ user });
    setState({
      email: '',
      password: '',
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Register</h1>
      <br />
      <label>Email</label>
      <br />
      <input
        type="text"
        name="email"
        value={state.name}
        placeholder="Enter Email"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>Password</label>
      <br />
      <input
        type="text"
        name="password"
        value={state.description}
        placeholder="Enter Password"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <br />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;
