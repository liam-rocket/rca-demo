import './App.css';

const Button = ({ handleButtonClick, text }) => {
  return <button onClick={handleButtonClick}>{text}</button>;
};

// properties
// ClassDay is a component
const ClassDay = ({
  date,
  time,
  module,
  topic,
  preClass,
  inClass,
  postClass,
  handleClick,
  children,
}) => {
  return (
    <div className="classDay">
      <h1>{date}</h1>
      <h4>{time === true ? 'liam is the best' : 'liam is also the best'}</h4>
      <h4>
        Module {module}: {topic}
      </h4>
      <br />
      <h5>
        <b>Pre Class</b>
      </h5>
      {preClass.map((item) => (
        <p>{item}</p>
      ))}
      <h5>
        <b>In Class</b>
      </h5>
      {inClass.map((item) => (
        <p>{item}</p>
      ))}
      <h5>
        <b>Post Class</b>
      </h5>
      {postClass.map((item) => (
        <p>{item}</p>
      ))}

      {/* <button onClick={handleClick}>Click me !</button> */}
      <Button handleButtonClick={handleClick} text="Click me !" />

      {children}
    </div>
  );
};

const App = () => {
  const lessons = [
    {
      date: 'Sat 20 Nov, Week 1, Course Day 1',
      time: true,
      module: '1',
      topic: 'Frontend Basics',
      preClass: [
        '1.0: Module 1 Overview',
        '1.1: HTML',
        '1.2: Wireframes',
        '1.3: HTML Basics',
        '1.4: ES6',
      ],
      inClass: ['1.ICE.1'],
      postClass: ['1.POCE.1'],
    },
    {
      date: 'Sat 23 Nov, Week 2, Course Day 2',
      time: '10:00 SGT (GMT+8)',
      module: '1',
      topic: 'Frontend Basics 2',
      preClass: ['2.0: Module 2 Overview'],
      inClass: ['1.ICE.2'],
      postClass: ['1.POCE.2'],
    },
    {
      date: 'Sat 25 Nov, Week 3, Course Day 3',
      time: '10:00 SGT (GMT+8)',
      module: '1',
      topic: 'Frontend Basics 3',
      preClass: ['1.3: Module 3 Overview'],
      inClass: ['1.ICE.3'],
      postClass: ['1.POCE.3'],
    },
  ];

  const clickAButton = () => {
    alert('I have clicked a button');
  };

  return (
    <div className="App">
      <div className="body">
        {lessons.map((lesson, i) => {
          return (
            <ClassDay
              key={`class-${i}`}
              date={lesson.date}
              time={lesson.time}
              module={lesson.module}
              topic={lesson.topic}
              preClass={lesson.preClass}
              inClass={lesson.inClass}
              postClass={lesson.postClass}
              handleClick={() => clickAButton()}
            >
              i am a children, i love hong kong
            </ClassDay>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// date,
// time,
// module,
// topic,
// preClass,
// inClass,
// postClass,
