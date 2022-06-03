/* eslint-disable max-len */
const data1 = ['A', 'B', 'C']; // <- n

/**
 * O(n ^ 2)
 *
 * We are pritning out data of i and data of j
 *
 * In terms of big o, this is going to be O(n ^ 2)
 *
 * Every single time we loop through n we have to loop through n again for each element of n
 *
 * These types of algos can be problematic as they are much slower as your input grows
 *
 * For example with an input size of 3 we perform this console log 9 times
 *
 * For we just bump this up to 5 now we have to perform that 25 times
 *
 * What if your input is 100 items long ??
 *
 * The time it takes to run this is growing exponentially
 */

for (let j = 0; j < data1.length; j += 1) {
  for (let i = 0; i < data1.length; i += 1) {
    console.log(data1[i] + data1[j]);
  }
}
