// These are primitves
const bootcamp: string = 'ptbc5';
const score: number = 10;
const isSaturday: boolean = true;

const strings: string[] = ['hello', 'liam', 'good', 'morning'];

interface Job {
  title: string;
  manager: string;
}

interface User {
  name: string;
  age: number;
  location: string;
  job?: Job;
}

const person: User = {
  name: 'liam',
  age: 28,
  location: 'hk',
};

const rocketClass: User[] = [
  {
    name: 'liam',
    age: 28,
    location: 'hk',
  },
  {
    name: 'john',
    age: 28,
    location: 'hk',
    job: {
      title: 'section leader',
      manager: 'sam o',
    },
  },
  {
    name: 'jane',
    age: 28,
    location: 'hk',
  },
];

const getBootcamp = (student: string): string => {
  return `${student} is in ${bootcamp}`;
};
console.log(getBootcamp('liam'));

const getSum = (number1: number, number2: number): number => {
  return number1 + number2;
};
console.log(getSum(1, 2));

// const personTwo = {
//   // name: 'cherry',
//   school: 'harvard',
//   age: 58,
//   jobs: ['binery', 'rocket'],
//   nationality: 'HK',
// };

// const arr: Person[] = [person, personTwo];

// const whoIsThis = (person: Person) => {
//   console.log(`This is ${person.name}`);
//   console.log(`He studies at ${person.school}`);
//   console.log(`He is ${person.age} years old`);

//   person.jobs.map((job: string) => {
//     console.log(`He works at ${job}`);
//   });

//   return 'done';
// };

// // can put default value
// const whoIsThisTwo = ({
//   name = 'vanessa',
//   school,
//   age,
//   jobs,
//   nationality,
// }: Person) => {
//   console.log(`This is ${name}`);
//   console.log(`He studies at ${school}`);
//   console.log(`He is ${age} years old`);

//   jobs.map((job: string) => {
//     console.log(`He works at ${job}`);
//   });

//   return 'done';
// };

// whoIsThisTwo(personTwo);
