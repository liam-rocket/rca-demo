import React, { useState } from 'react';

const Form = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    telephone: '',
    hovered: 0,
    submit: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form-wrapper">
        <label>Email:</label>
        <input
          type="text"
          name="email"
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
