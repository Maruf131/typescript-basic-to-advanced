class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  weight: number;
  constructor(height: number, weight: number) {
    super();
    this.height = height;
    this.weight = weight;
  }
  getArea(): number {
    return this.height * this.weight;
  }
}

const area = (value: Shape) => {
  console.log(value.getArea());
};

const shaple1 = new Shape();
const shaple2 = new Circle(20);
const shaple3 = new Rectangle(10, 20);

area(shaple3);
