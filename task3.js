//Write a JavaScript function to get the last element of an array
function lastElement(a) {
    if (Array.isArray(a)) {
        console.log(a.pop())
    } else {
        throw new Error('Provided datatype is not an array');
    }
}
lastElement(['abc', 'test', 3, 8, 22, 'nice work']);

//Write a simple JavaScript program to join all elements of the following array into a string
let a = new Array('Andrii', 'Taras', 'Bogdan', 'Mariana', 'Pavlo');
let b = a.join(' ');
console.log(b);

//JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array
//let a1 = [1, 2];
let a1 = [1, 2, 3];
let b1 = [3, 2, 1];
let c1 = [];
if (a1.length != b1.length) {
    throw new Error("Arrays are different. Please provide arrays with the same length");
} else {
    for (let i = 0; i < a1.length; i++) {
        c1[i] = a1[i] + b1[i];
    }
}
console.log(c1);

//JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();
let rectangle = {
    width: 25,
    height: 10,
    getPerimeter: function () { return (this.width + this.height) * 2; },
    getArea: function () { return this.height * this.width; }

};
console.log(`Rectangle area: ${rectangle.getArea()}`);
console.log(`Rectangle perimeter: ${rectangle.getPerimeter()}`);
