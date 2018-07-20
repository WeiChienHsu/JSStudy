// add two numbers normally


let resultA, resultB, resultC

function add (num1, num2) {
    return num1 + num2;
}

resultA = add(1, 2); // you get resultA = 3 immediately
resultB = add(resultA, 3); // you get resultB = 6, immediately
resultC = add(resultB, 4); // you get resultC = 10, immediately

console.log('total ' + resultC);
console.log(resultA, resultB, resultC);

/*
total 10
3 6 10
 */