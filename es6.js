import fs from 'fs';

// const fs = require('fs');

// // * ES5

// var name = 'Liam';
// name = 'Kai';

// console.log(name);

// // * ES6

let bootcamp = 'PTBC8';
// bootcamp = 'FTBC8';

console.log(bootcamp);

const student = 'Lester';
// student = 'Cheng Wai';

// console.log(student);

// let num = 'ten';
// num += 1;

// console.log(num);

// ---------

const obj = { name: 'john', bootcamp: 'ptbc8' };

const needAddress = true;

obj.address = true;

console.log(obj);

// //            0  1  2
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr1.pop();

// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

function getNumber() {
  return 1;
}

getNumber();

const test = 'test' + '1' + '2';

const newString = `${student} is from ${bootcamp}`;

console.log(newString);
