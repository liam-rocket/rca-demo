interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// const rec = new Rectangle(6, 8);
const square = new Square(4);

// const area = rec.getArea();
const squareWith = square.toString();
const squareArea = square.getArea();

// console.log(area);
console.log(squareWith);
console.log(squareArea);
