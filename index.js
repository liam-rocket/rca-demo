// const httpRequest = (req, res, next) => {
//   console.log({ req });
// };

// const handler = (x, y) => (req, res, next) => {
//   console.log('--- this is handler start ---');
//   console.log({ x, y });
//   console.log({ req });
//   console.log('--- this is handler end ---');
// };

// const caller = handler('x ', 'y');

// caller('request');

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

// import Wheel from './wheel';

class Model {
  constructor(number, color) {
    this.number = number;
    this.color = color;
  }

  changeOwner(newDriver) {
    console.log('the wheels are changed', newDriver);
  }
}

class Car extends Model {
  constructor(number, color, driver) {
    super(number, color);
    this.driver = driver;
  }

  drive() {
    console.log(
      `${this.driver} is driving a car with ${this.number} of wheels`
    );
    this.changeOwner('andrew');
  }

  changeOwner(newDriver) {
    this.driver = newDriver;
    console.log(`Driver changed to ${this.driver}`);
  }
}

const newCar = new Car(10, 'red', 'liam');

newCar.drive();
// newCar.changeOwner('Regina');
