function timeout(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, duration);
    });
}

// Note: This code uses arrow function syntax
var m = timeout(5000).then(() => {
    console.log("done!");
})

// Output (after 5 seconds):
// done!