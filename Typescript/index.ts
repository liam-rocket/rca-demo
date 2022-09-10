const bootcamp: string = 'ptbc2';

const getBootcamp = (student: string): string => {
  return `${student} is in ${bootcamp}`;
};
console.log(getBootcamp('liam'));

const getSum = (number1: number, number2: number): number => {
  return number1 + number2;
};
console.log(getSum(1, 2));

interface Person {
  name?: string | number;
  school: string;
  age: number;
  jobs: string[];
}

const person = {
  name: 'liam',
  school: 'rocket',
  age: 28,
  jobs: ['binery', 'rocket'],
};

const personTwo = {
  // name: 'cherry',
  school: 'harvard',
  age: 58,
  jobs: ['binery', 'rocket'],
  nationality: 'HK',
};

const arr: Person[] = [person, personTwo];

const whoIsThis = (person: Person) => {
  console.log(`This is ${person.name}`);
  console.log(`He studies at ${person.school}`);
  console.log(`He is ${person.age} years old`);

  person.jobs.map((job: string) => {
    console.log(`He works at ${job}`);
  });

  return 'done';
};

// can put default value
const whoIsThisTwo = ({
  name = 'vanessa',
  school,
  age,
  jobs,
  nationality,
}: Person) => {
  console.log(`This is ${name}`);
  console.log(`He studies at ${school}`);
  console.log(`He is ${age} years old`);

  jobs.map((job: string) => {
    console.log(`He works at ${job}`);
  });

  return 'done';
};

whoIsThisTwo(personTwo);
