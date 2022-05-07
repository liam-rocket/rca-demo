const randomNumber = () => Math.floor(Math.random() * 1000);

const setDelay = (delay) => {
  console.log(`1. delaying ${delay}`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2. done with timeout');
      resolve(delay);
    }, delay);
  });
};

const doStuff = async () => {
  console.log('3. about to set timeout');
  await setDelay(randomNumber());
  console.log('4. after call setTimeout');
};

console.log('5. about to call do stuff');
doStuff();
console.log('6. finished call do stuff');
