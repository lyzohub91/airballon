//JavaScript function to check if given string includes given symbol
function symbolInString(a, b) {
    let c = a.indexOf(b);
    if (c >= 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
symbolInString('automobile', 'i');


//JavaScript function to check whether a string is blank or not (string with spaces should be also blank)
function blankString(a) {
    if (a.trim() === '') {
        console.log(a.trim() === '');
    } else {
        console.log(a.trim() === '');
    }
}
blankString('          ');

//JavaScript function to convert a string in abbreviated form
function abbrev(a) {
    let x = a.split(/\s+/); //використав /\s+/ щоб прибрати зайві пробіли(більше ніж один) між ім'ям та прізвищем. 
    return ((x[0].substring(0, 1) + '.' + x[1].substring(0, 1) + '.').toUpperCase());
}
console.log(abbrev('andrii          lyzogub'));

//JavaScript function that accept two integers and display the larger
function larger(a, b) {
    if (a > b) {
        console.log(a);
    } else if (a < b) {
        console.log(b);
    } else if (a === b) {
        console.log('Two integers are equal');
    } else {
        console.log("Not integers were compared");
    }
}
larger(70, 140);

//JavaScript function with conditional statement to sort three numbers.
function sort(n1,n2,n3){
    if (n1>n2){
        max=n1;
        min=n2;
    }else {
        max=n2;
        min=n1;
    }
    if (max<n3) {
        max=n3;
    } 
    if (min>n3){
        min=n3;
    }
    console.log(min,n1+n2+n3-max-min,max);
}
sort(20,1,3);