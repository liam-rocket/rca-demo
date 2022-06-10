import moment from 'moment';

// const httpRequest = (req, res, next) => {
//   console.log({ req });
// };

// const handler = (x, y) => (req, res, next) => {
//   console.log('--- this is handler start ---');
//   console.log({ x, y });
//   console.log({ req });
//   console.log('--- this is handler end ---');
// };

// const caller = handler('x ', 'y');

// caller('request');

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// console.log(fibonacci(6));

const time = moment().add(1654662002, 'milliseconds');

console.log(time.format('YYYY-MM-DD'));
