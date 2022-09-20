const Shape = require('./inheritance');

class Rectangle extends Shape {
  constructor() {
    super();
  }
}

const rec = new Rectangle();

console.log(rec.getArea(2, 4));
