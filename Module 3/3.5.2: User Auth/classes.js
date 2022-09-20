class Car {
  constructor(driver, color, numberOfDoors) {
    this.driver = driver;
    this.color = color;
    this.numberOfDoors = numberOfDoors;
  }

  drive() {
    console.log(`${this.driver} is driving`);
  }

  park(carpark) {
    console.log(`${this.driver} parked the car at ${carpark}`);
  }
}

const redFerrari = new Car('liam', 'red', 2);
const blueLambo = new Car('aqif', 'blue', 2);

blueLambo.drive();
blueLambo.park('marina bay sands');

// class House {
//   constructor(noOfWindows, color) {
//     this.noOfWindows = noOfWindows;
//     this.color = color;
//     this.rentingOn = '';
//   }

//   list(platform) {
//     this.rentingOn = platform;
//     return 'this house';
//   }

//   expand(windows) {
//     this.noOfWindows = windows;
//   }
// }

// const redHouse = new House(10, 'brown');
// const blueHouse = new House(5, 'blue');

// blueHouse.list('airbnb');
// redHouse.list('99.co');

// console.log(blueHouse.rentingOn);
// console.log(redHouse.rentingOn);

// redHouse.expand(20);

// console.log(redHouse.noOfWindows);
