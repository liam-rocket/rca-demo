import 'core-js/es/function';
import catNames from 'cat-names';
import { cat } from './cat.js';
import { mouse } from './mouse.js';
import { arrow } from './arrowFunction.js';
import './main.css';

console.log(catNames.random());
console.log('cat', cat);
console.log('mouse', mouse);

// the spread operator is a newer feature that is not compatible with older versions of certain browsers

const obj = {
  a: 'apple',
  b: 'buffalo',
};

const newObj = { ...obj, c: 'cheetah' };
console.log('new obj', newObj);

const result = arrow();
console.log('result', result);
