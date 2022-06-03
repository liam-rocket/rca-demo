import catNames from 'cat-names';
import pg from 'pg';
import { cat } from './cat.js';
import { mouse } from './mouse.js';

console.log(catNames.random());
console.log('cat', cat);
console.log('mouse', mouse);
