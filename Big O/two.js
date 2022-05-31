/* eslint-disable max-len */

/**
 * O(n + a)
 *
 * Now we have two arrays, and two loops
 *
 * 1. We have n, which we are going to use for our data 1
 * 2. We will need to come up with some other variable for data 2
 *
 * We can say b ? It doesn't matter
 *
 * In our case, we will have N to represent data, and A to represent data 2
 *
 * Our algo below is going to scale based on the length of both data 1 and 2
 *
 * So we will have a big o here of O(n + a)
 *
 * This is because we are scaling off of both of N and A since we loop through data 1 and then data 2
 */

const data1 = ['A', 'B', 'C'];
const data2 = [1, 2, 3, 4, 5];

for (let i = 0; i < data1.length; i += 1) {
  console.log(data1[i]);
}

for (let i = 0; i < data2.length; i += 1) {
  console.log(data2[i]);
}

/**
 * Recap: O(n + a)
 * Our algorithm is going to scale based on the length of data 1 and data 2
 * So we have a big o here of N + A because we have the length of data 2 and data 1
 * We loop through everything in data 1 n times then we loop through everything in data 2 as a
 * Because that's the length of our array so we have an n plus a length loop here
 */
