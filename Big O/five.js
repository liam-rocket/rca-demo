/* eslint-disable max-len */
const data1 = ['A', 'B', 'C'];

// console.log('1');
// console.log('2');

for (let j = 0; j < data1.length; j += 1) {
  for (let i = 0; i < data1.length; i += 1) {
    console.log(data1[i] + data1[j]); // <-- if we do this 4 times, would it be O(4n^2)
    console.log(data1[i] + data1[j]);
    console.log(data1[i] + data1[j]);
    console.log(data1[i] + data1[j]);
  }
}

/**
 *
 * O(n^2)
 *
 * When you're doing big o notation one thing that you almost always are going to do is remove any leading constants
 *
 * 4 in this case is kina meaningless it's just based on the size of the input
 *
 * What we really care about is the n ^ 2 part because this is going to tell us how our algo grows over time
 *
 * Any extra constants or any extra added numbers like that we can just completely remove
 */
