import './App.css';

// 7.4 react state

function App() {
  const element = (
    <div>
      <h1>Hello World!</h1>
      <h2>This is a react demo</h2>
      <p>Done by Liam @ Rocket</p>
    </div>
  );

  // Value of message depends on value of myRandomNum
  const myRandomNum = Math.random() * 10;
  let message;

  if (myRandomNum > 5) {
    message = <p>Wow past 5!!</p>;
  } else {
    message = <p>Not that big of a num :(</p>;
  }

  const isLoggedIn = true;

  const numberArray = [1, 2, 3, 4, 5, 'liam', 'rocket', 7, 8];

  const students = [
    {
      id: 1,
      name: 'Amelia',
    },
    {
      id: 2,
      name: 'Aqif',
    },
    {
      id: 3,
      name: 'Bernice',
    },
    {
      id: 4,
      name: 'Regina',
    },
    {
      id: 5,
      name: 'Richie',
    },
    {
      id: 6,
      name: 'Liam',
    },
  ];

  const handleClick = () => {
    console.log('this is clicked');
  };

  return (
    <div className="App">
      {element}
      <hr />
      {message}
      <hr />
      <div className={`logged-status ${isLoggedIn ? 'blue' : 'red'}`}>
        <p>
          {isLoggedIn ? 'The user is logged in' : 'The user is NOT logged in'}
        </p>
      </div>
      <hr />
      <ul>
        {numberArray.map((item) => {
          return <li key={`${item}`}>{item}</li>;
        })}
      </ul>
      <hr />
      <h1>Students</h1>
      {students.map((item, i) => {
        return (
          <div key={`row-${i}`} className="student-block">
            <h3>{item.id}.</h3>
            <h3 className="blue">{item.name}</h3>
          </div>
        );
      })}

      <button onClick={handleClick} onMouseEnter={handleClick}>
        A button
      </button>
    </div>
  );
}

export default App;

// // Value of message depends on value of myRandomNum
// const myRandomNum = Math.random() * 10;
// let message;
// if (myRandomNum > 5) {
//   message = <p>Wow past 5!!</p>;
// } else {
//   message = <p>Not that big of a num :(</p>;
// }

// const isLoggedIn = true;

// # 7.2
// const numbers = [1, 2, 3, 4, 5];
// const jsxListItems = numbers.map((number) => <li key={number}>{number}</li>);

// {
//   /* {message} */
// }
// {
//   /* {myRandomNum > 5 && <p>Wow! Big numbers!</p>} */
// }

// {
//   /* <div className={`logged-status ${isLoggedIn ? 'blue' : 'red'}`}>
//         The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//       </div> */
// }

// {
//   /* <ul>{jsxListItems}</ul> */
// }
