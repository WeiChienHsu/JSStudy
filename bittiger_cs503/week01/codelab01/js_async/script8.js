var sleep = function (ms) {

    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("haha");
        }, ms);
    });
    return pr omise;
};


sleep(2000)
    .then(function (result) {
        console.log(result);
    });

// scotch.io/tutorials/javascript-promises-for-dummies