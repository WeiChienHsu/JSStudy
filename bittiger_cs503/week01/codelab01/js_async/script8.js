var sleep = function (ms) {

    var promise = new Promise(function (resolve, reject) {
        setTime(function () {
            resolve("haha");
        }, ms);
    });
    return promise;
};


sleep(2000)
    .then(function (result) {
        console.log(result);
    });

// scotch.io/tutorials/javascript-promises-for-dummies