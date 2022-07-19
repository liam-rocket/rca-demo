import { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './components/counter';
import ClassCounter from './components/classCoutner';
import ListItem from './components/listItem';

function App() {
  const [items, setItems] = useState([1]);

  // * Input component

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);

  const handleChange = (event) => {
    const userInput = event.target.value;
    if (userInput.length > 8) {
      setNameError(true);
      return;
    }
    setName(event.target.value);
  };

  // * Ajax request demo!

  const handleButtonClick = async () => {
    const resp = await axios.get('http://localhost:3005/getItems');
    setItems(resp.data);
  };

  const clearItems = () => {
    setItems([]);
  };

  const getData = async () => {
    setTimeout(async () => {
      const resp = await axios.get('http://localhost:3005/getItems');
      setItems(resp.data);
    }, 500);
  };

  useEffect(() => {
    getData();
  }, []);

  // *  Error state as an object

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    age: false,
  });

  const handleFieldsChange = (event, field) => {
    const value = event.target.value;

    if (field === 'firstName') {
      if (value === 'Liam') {
        // ... call backend to see if liam is already taken as a name
        // if true....
        setFormError({ ...formError, firstName: true });
      }
      setFirstName(value);
    }
    if (field === 'lastName') {
      if (value === '') {
        setFormError({ ...formError, lastName: true });
      }
      setLastName(value);
    }
    if (field === 'age') {
      if (isNaN(value)) {
        setFormError({ ...formError, age: true });
      }
      setAge(value);
    }
  };

  return (
    <div className="App">
      <div style={{ padding: 15 }}>
        {/* Counter component */}
        <h3>Counter component</h3>
        <Counter celsiusTemp={10000} />
        <br />
        {/* Input component */}
        <h3>Input component</h3>
        <input label="name" value={name} onChange={handleChange}></input>
        <h3>Name: {name}</h3>
        {nameError && <h5>Name must be less than 8 characters</h5>}
        <br />
        {/* Class counter component */}
        <h3>Class counter component</h3>
        <ClassCounter />
        <br />
        {/* Ajax request demo! */}
        <h3>Ajax request demo!</h3>
        <button onClick={handleButtonClick}>Click me to get items !</button>
        <button onClick={clearItems}>Clear Items</button>
        <ListItem items={items} />
        {items.map((item) => {
          const student = 'andrew';
          const studentUpperCase = student.toUpperCase();
          return <h3>{studentUpperCase}</h3>;
        })}
        <br />
        {/* Error state as an object */}
        <h3>Error state as an object</h3>
        <h5>First Name: {firstName}</h5>
        <input
          label="first name"
          value={firstName}
          onChange={(event) => handleFieldsChange(event, 'firstName')}
        />
        {formError.firstName && (
          <h5 style={{ color: 'red' }}>This name is taken.</h5>
        )}
        <h5>Last Name: {lastName}</h5>
        <input
          label="last name"
          value={lastName}
          onChange={(event) => handleFieldsChange(event, 'lastName')}
        />
        {formError.lastName && (
          <h5 style={{ color: 'red' }}>Last name must not be empty.</h5>
        )}
        <h5>Age: {age}</h5>
        <input
          label="age"
          value={age}
          onChange={(event) => handleFieldsChange(event, 'age')}
        />
        {formError.age && (
          <h5 style={{ color: 'red' }}>Must be a valid number.</h5>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

/**
 *
 * JS that are allowed inside the return statement
 *
 * 1. .map()
 *
 *                         render this    else render this
 * 2. ifSomethingIsTrue ? <div>...</div> : <div>...</div>
 *
 *                    then this, else nothing
 * 3. ifSomethingIsTrue && <div>...</div>
 *
 */

export default App;

const arr = [1, 2, 3, 4];

arr.map((item) => item.toString());

arr.map((item) => {
  // ..... some js logic
  return item.toString();
});
