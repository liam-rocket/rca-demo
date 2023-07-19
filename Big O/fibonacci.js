// find the x number of a fibonacci spiral

const spril = [1, 1, 2, 3, 5, 8];

function fibonacci(num) {
  if (num <= 1) return 1;
  //             10                    2
  return fibonacci(num - 1) + fibonacci(num - 2);
}

//  fibonacci(2) + fibonacci(0);
//       1       +      1

console.log(fibonacci(20));
