// 1st way
setInterval(() => {
  console.log('hello !');
}, 1000);

// 2nd way
const sayHello = () => {
  console.log('hello !');
};
setInterval(sayHello, 1000);
