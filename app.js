//console.log("\nNice work! Your first application have been launched.");
//console.log("Now, I need to know your name, type it below: ");
//console.log("Andrii Lyzogub");

let stdin = process.openStdin();

stdin.addListener("data", (txt) => {
    if (txt.toString().trim() === "quit") {
        console.log("\nHave a nice JS trip! Bye-bye");
        stdin.end();
    } else {
        console.log(`\nHi ${txt.toString().trim()}, nice to meet you at Eleks QA Academy 2019. I am sure you'll become great in your job.`);
        console.log(`${txt.toString().trim()}, to quit this application you can use 'Ctrl + C' keys, or type 'quit' and hit 'Enter'`);
    }
});
function calc(a, b, c) {
    switch (c) {
        case "*":
            return a * b;
            break;
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "/":
            return a / b;
            break;
    }
};
function fifty(a, b) {
    if ((a === 50) || (b === 50) || (a + b === 50)) {
        return true;
    }
    else {
        return false;
    };
};
function sum(a, b) {
    return a + b;
}
module.exports.fifty = fifty;
module.exports.calc = calc;
module.exports.sum = sum;

