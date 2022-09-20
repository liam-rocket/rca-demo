class Person {
  public personName: string;
}

const liam = new Person();
liam.personName = 'liam';

class Car {
  public driver: Person;

  public constructor(driver: Person) {
    this.driver = driver;
  }

  private drive() {
    console.log(`${this.driver.personName} is driving`);
  }

  public letsDrive() {
    console.log('starting the car');
    this.drive();
  }

  public static staticLetsDrive() {
    console.log('starting the car');
    // this.drive();
  }
}

const newCar = new Car(liam);

newCar.letsDrive();

Car.staticLetsDrive();
