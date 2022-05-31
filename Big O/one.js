/* eslint-disable max-len */

/**
 * O(n)
 *
 * Length of the data array = n
 *
 * How our algorithms grows as n grows ?
 *
 * What if n grows from 3 to 300 ?
 *
 * We will end up running this loop 300 times.
 *
 * Therefore, this scales linearly, 1 to 1 with the size of n
 *
 * We would give this a big o notation of Big O of N -> O(n)
 */

const data = ['A', 'B', 'C'];
for (let i = 0; i < data.length; i += 1) {
  console.log(data[i]); // <-- this is the core portion, how many times does this happen based on how large our input (n) is ?
}

/**
 * Recap: O(n)
 * This algorithm scales with the size of our input based on time.
 * So as our input scales from 3 to 300, our algorithm is going to scale in time linearly
 * essentially it's going to grow one to one with the size of our input
 */
