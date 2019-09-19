const Vehicle = require('./Vehicle');
const Car = require('./car');
const Truck = require('./Truck');
let volvo = new Car('XC60', 2018, 280);
let maz = new Truck('super Heavy', 2019, 220);

volvo.displayInfo(); //Call method of father’s class.
volvo.transportPeople(); //Try to call different methods for both
//volvo.staticMethod(); // TypeError: volvo.staticMethod is not a function
Car.staticMethod(); //Add static method to one class, try to call it and investigate output


maz.displayInfo(); // Override method of father’s class.
maz.transportContainer(); //Try to call different methods for both
//maz.transportPeople(); //Try to call different methods for both -- TypeError: maz.transportPeople is not a function
//volvo.transportContainer(); //Try to call different methods for both -- TypeError: maz.transportPeople is not a function