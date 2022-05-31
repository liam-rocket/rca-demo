/* eslint-disable max-len */

/**
 * * Space Complexity -> how does your algorithm grow in memory usage as the input size scales ?
 *
 * Below is the same for loop taht we starte with
 *
 * The space complexity is essentially 0
 *
 * We are not adding any extra space becaues we are not creating anything inside of this
 *
 * We can say this has the space complexity of O(1)
 *
 * What happens if we were to create a brand new array ? (line ....)
 *
 * Inside of the loop we're going to create some brand new values to the out array
 *
 * This is going to be a space complexity of O(n) because our output is going to be the exact same length as our input here
 *
 * The amoutn of memory out takes up is going to be the same as the amout of the input element (data)
 */

// * O(1)
const data = ['A', 'B', 'C'];
for (let i = 0; i < data.length; i += 1) {
  console.log(data[i]);
}

// * O(n)
const out = [];
for (let i = 0; i < data.length; i += 1) {
  out[i] = data[i];
}

// todo: Homework ->> What would this be in terms of Big O ?
for (let i = 0; i < data.length; i += 1) {
  out[i] = []; // <- creating a new array in out for each item we have in data
  for (let j = 0; j < data.length; j += 1) {
    out[i][j] = data[i];
  }
}
