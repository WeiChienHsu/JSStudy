function greet(callback) {
    console.log("hello!");
    // callback();
}

greet(function () {
    console.log("The callback was invoked!")
});

greet(function () {
    console.log("A different callback was invoked!")
});