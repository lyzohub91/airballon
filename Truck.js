const Vehicle = require('./Vehicle');

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = 'truck'
    }

    transportContainer() {
        console.log(`I am starting transporting heavy container`)
    }

    displayInfo() {
        super.displayInfo();
        console.log("Please note, driving trucks required additional driver's licence category"); //Override method of father’s class.

    }
}
module.exports =  Truck;
