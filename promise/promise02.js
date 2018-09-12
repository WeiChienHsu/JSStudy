function timeout(duration) {
    return new Promise(function(resolve, reject) {
        console.log("duration: " + duration);
        setTimeout(resolve, duration);
    });
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("error");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
});