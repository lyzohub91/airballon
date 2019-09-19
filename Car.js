const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'car';
    }

    transportPeople() {
        console.log(`I am starting transporting passengers`);
    }

    static staticMethod() {
        console.log(`This static method has been called for type: car`); //Add static method to one class, try to call it and investigate output
    }
}
module.exports =  Car;