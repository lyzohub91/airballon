// slide 9
console.log(`1 step`);
console.log(`2 step`);
setTimeout(() => {
    console.log(`3 step`);
}, 2000);
console.log(`4 step`);

//slide 10
console.log(`1 step`);
console.log(`2 step`);
new Promise((resolve, reject) => setTimeout(() => {
    console.log(`3 step`);
    resolve();
}, 3000)).then(() => {
    console.log(`4 step`);
});

// slide 11
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
]).then((results) => {
    console.log(results[0]);
    console.log(results[2]);
});

// slide 13
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return (x + a + b + c);
}


addAsync(10).then((sum) => {
    console.log(sum);
});
