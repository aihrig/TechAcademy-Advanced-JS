import { Rectangle } from './rectangle.js';
import { Circle } from './circle.js';
import { Triangle } from './triangle.js';

let rect = new Rectangle('red', 2, 4);
let circ = new Circle('green', 4.5);
let tri = new Triangle('blue', 12, 8);

console.log(`Area for ${rect.color} rectangle ${rect.height} by ${rect.width} is ${rect.getArea()}`);
console.log(`Area for ${circ.color} circle with a radius of ${circ.radius} is ${circ.getArea()}`);
console.log(`Area for ${tri.color} triangle with a base of ${tri.base} and height of ${tri.height} is ${tri.getArea()}`);
