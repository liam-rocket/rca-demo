/* eslint-disable max-len */
const data1 = ['A', 'B', 'C'];
const data2 = [1, 2, 3, 4, 5];

/**
 * O(n + a)
 *
 * Now we have our loops inside of each other
 *
 * We're looping through every single element in data 2
 *
 * Then for each one of those elements we're looping through every single element inside of data 1.
 *
 * To represent how long our algo takes, our big o noation is going to be O(n * a)
 *
 * This is because if we add one more item to data 2 (ie. 6)
 *
 * We are going to be looping through our algorithm one more time (because of the nested for loop)
 *
 * When you start seeing nested loops like this you're going to run into pretty poor performing algorithms
 *
 * Because your big o notation is going to scale quite quickly
 */

for (let j = 0; j < data2.length; j += 1) {
  for (let i = 0; i < data1.length; i += 1) {
    console.log(data1[i] + data2[j]); // we are doing this console log N times for every single A time that we go through our loop
  }
}

/**
 * Recap: O(n * a)
 * Because of our nested for loops, we are going to be running the whole operation one more time for every new item added to data 2
 */
