import React, { useState } from 'react';

const Form = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    telephone: '',
  });

  const handleChange = (event) => {
    // const name = e.target.name
    // const value = e.target.value;
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({ ...formState, [name]: value });

    // if (name === 'email') {
    //   setFormState({ ...formState, email: value });
    // }
    // if (name === 'password') {
    //   setFormState({ ...formState, password: value });
    // }
    // if (name === 'telephone') {
    //   setFormState({ ...formState, telephone: value });
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(formState);
    alert(`email is ${formState.email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form-wrapper">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="your email"
          value={formState.email}
          onChange={handleChange}
        />

        <br />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />

        <br />

        <label>Telephone:</label>
        <input
          type="text"
          name="telephone"
          value={formState.telephone}
          onChange={handleChange}
        />

        <br />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default Form;

/**
 *
 * Question:
 *
 * 1. How would you guys refractor this ?
 *
 */
