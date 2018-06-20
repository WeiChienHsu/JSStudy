// functions.js (quiz)

// this function with these arguments would return 30
function test(x, y) {
    return y - x;
}

test(10, 40)

// this function returns 80 and then stops
function test(x) {
    return x * 2;
    console.log(x);
    return x / 2;
}

test(40);