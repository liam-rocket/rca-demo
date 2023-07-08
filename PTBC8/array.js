//               0       1      2       3
const array1 = ['Liam', 'Zach', 'KS-1', 'James', 'KS-2'];

array1.splice(2, 0, 'Cathy');
console.log('array: ', array1);

const array2 = array1.slice(1, 3);
console.log('array2: ', array2);

// sorting in an ascending order
const arraySorted = array1.sort();
console.log('arraySorted: ', arraySorted);

// sorting in an descending order
// const arraySortedDesc = array1.reverse();
const arraySortedDesc = array1.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1));
console.log('arraySortedDesc: ', arraySortedDesc);

// filter items
const filteredArray = array1.filter(
  (item) => item === 'Liam' || item === 'Zach'
);
console.log('filteredArray: ', filteredArray);

// find the first item of the array that matches the condition
const findKS = (item) => item === 'KS';
const found = array1.find(findKS);
// const found = array1.find((item) => item === 'KS');  // <- same!
console.log('found: ', found);

// find the first item of the array that matches the condition
// the array: [ 'Zach', 'Liam', 'KS-2', 'KS-1', 'James', 'Cathy' ]
const foundKS = array1.find((item) => item.includes('KS')); // <- same!
console.log('foundKS: ', foundKS);

// a === b ? 0 : a < b ? 1 : -1

// if (a === b) {
//   return 0;
// } else if (a < b) {
//   return 1;
// } else {
//   return -1;
// }

// condition ? if true...do this : if false...do this
