class House {
  constructor(color) {
    this.noOfDoors = 4;
    this.noOfWindows = 8;
    this.width = 100;
    this.height = 100;
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}

const liamHouse = new House('blue');
const eugeneHouse = new House('red');
const carmenHouse = new House('purple');

console.log(liamHouse.getColor());
console.log(eugeneHouse.getColor());
console.log(carmenHouse.getColor());
