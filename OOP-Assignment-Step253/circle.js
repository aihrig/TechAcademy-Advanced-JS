import { Shape } from './shape.js';

export class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return this.radius**2 * Math.PI;
    }
}