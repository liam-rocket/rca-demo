/* eslint-disable */

// console.log('about to throw!');
// throw 'throwed';
// console.log('we threw'); // * <- would not even run

// todo: throw error

// console.log('about to throw!');
// throw new Error('an error');
// console.log('we threw'); // * <- would not even run

// todo: multi level

console.log('define say');

const say = (word) => {
  try {
    console.log('about to throw'); // todo: how to add try catch here ?

    throw 'you have an unknown error';

    // normal part of say function
    console.log(word);
  } catch (err) {
    // throw new Error(err);
    return 'have an error';
  }
};

const yell = (word) => {
  // try {
  say(word.toUpperCase());
  // } catch (err) {
  //   console.log('error: ', err);
  //   console.log('back in yell');
  // }
};

yell('hello world');
