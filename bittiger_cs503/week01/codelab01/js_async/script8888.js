var sleep = function (ms) {

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("haha");
        }, ms);
    });
    return promise;
};




Promise.all([sleep(1000), sleep(3000)])
    .then(function () {
        console.log("All done");
    });

Promise.race([sleep(1000), sleep(3000)])
    .then(function () {
        console.log("Race is won!");
    });
// scotch.io/tutorials/javascript-promises-for-dummies