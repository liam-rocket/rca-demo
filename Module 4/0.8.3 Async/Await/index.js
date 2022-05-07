const randomNumber = () => Math.floor(Math.random() * 1000);

const setDelay = (delay) => {
  console.log(`1. delaying ${delay}`);
  setTimeout(() => {
    console.log('2. done with timeout');
  }, delay);
};

const doStuff = () => {
  console.log('3. setting timeout');
  setDelay(randomNumber());
  console.log('4. after call settimeout');
};

console.log('5. about to call do stuff');
doStuff();
console.log('6. finished call do stuff');
