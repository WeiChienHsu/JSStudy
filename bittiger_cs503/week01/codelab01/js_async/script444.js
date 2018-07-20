function greet(callback) {
    console.log("hello!");
    var data = {
      name: "Jake Wang"
    };
    callback(data);
}

greet(function (data) {
    console.log("The callback was invoked!");
    console.log(data);
});

greet(function (data) {
    console.log("A different callback was invoked!");
    console.log(data.name);
});

/*
hello!
The callback was invoked!
{ name: 'Jake Wang' }
hello!
A different callback was invoked!
Jake Wang
 */

/*
why not:
Hello!
Hello!
Because they are not async functions
 */