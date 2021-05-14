export class Dog {

    constructor(breed, color, height, weight) {
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.weight = weight;
    }

    shake() {
        console.log('shake');
    }

    sit() {
        console.log('sit');
    }

    laydown() {
        console.log('plunk');
    }

}
