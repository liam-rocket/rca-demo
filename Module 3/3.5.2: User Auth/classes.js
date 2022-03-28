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

const redFerrari = new Car("liam", "red", 2);
const blueToyota = new Car("aqif", "blue", 4);

blueToyota.drive();
blueToyota.park("marina bay sands");
