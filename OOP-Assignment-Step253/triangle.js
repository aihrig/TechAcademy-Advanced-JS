import { Shape } from './shape.js';

export class Triangle extends Shape {

    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }

}