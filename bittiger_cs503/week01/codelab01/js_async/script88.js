var sleep = function (ms) {

    var promise = new Promise(function (resolve, reject) {
        setTime(function () {
            resolve("haha");
        }, ms);
    });
    return promise;
};


Promise.all([sleep(1000), sleep(2000)])
    .then(function () {
        console.log("All done");
    });
// scotch.io/tutorials/javascript-promises-for-dummies