/*
    CIT 281 Project 6:

    Name: Jia Huang
*/

class Shape {
    constructor( arraySides = [] ) {
      this.sides = arraySides;
    }

    perimeter() {
    return this.sides != null ? this.sides.reduce((a, b) => a + b, 0) : 0
    }
  }

  /*
  console.log(new Shape([5, 10]).perimeter());  // 15
  console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
  console.log(new Shape().perimeter()); // 0
  */

  // new class rectangle extends shape
  class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
      super([length, length, width, width])
      this.length = length
      this.width = width
    }
    // method: area of rectangle
    area() {
      return this.length*this.width
    }
  }

  /*
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
  super([sideA, sideB, sideC])
  this.sideA = sideA
  this.sideB = sideB
  this.sideC = sideC
  }
  // method: area of triangle
  area() {
    let s = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  }
}

/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];

data.map( (sides) => {
switch(sides.length) {
  case 1:
    console.log(`Shape with ${sides.length} side unsupported`)
    break;
  case 2: 
    let shapeName = sides[0] == sides[1] ? 'Square' : 'Rectangle'
    console.log(`${shapeName} with sides ${sides[0]},${sides[1]} has perimeter of ${new Rectangle(sides[0], sides[1]).perimeter()} and area of ${new Rectangle(sides[0], sides[1]).area()}`)
    break;
  case 3:
    console.log(`Triangle with sides ${sides[0]},${sides[1]},${sides[2]} has perimeter of ${new Triangle(sides[0], sides[1], sides[2]).perimeter()} and area of ${new Triangle(sides[0], sides[1], sides[2]).area()}`)
    break;
  default:
    console.log(`Shape with ${sides.length} sides unsupported`)
    break;
  }
})
