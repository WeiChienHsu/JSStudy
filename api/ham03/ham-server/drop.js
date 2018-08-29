var mongoose = require('mongoose');


// conn = mongoose.connect("mongodb://127.0.0.1:27017/clmic_db", { useNewUrlParser: true });


/*mongoose.connection.collections["clmicmodels"].drop( function(err) {
    console.log('collection dropped');
});*/

// conn.connection.;

mongoose.connect('mongodb://localhost/clmic_db',function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase(function (err) {
        if (err) return console.error(err);
        process.exit(0);
        // db.disconnect();
        // process.exit(0);

    });

});




