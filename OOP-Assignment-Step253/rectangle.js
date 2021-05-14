import { Shape } from './shape.js';

export class Rectangle extends Shape {

    constructor(color, height, width) {
        super(color);
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }

}