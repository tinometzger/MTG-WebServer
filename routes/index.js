var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database: 'mtgcards'
});


/* GET home page. */
router.get('/', function(req, res, next) {
    connection.connect();
    connection.query("SELECT * FROM cards;", function (err, result) {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("Hat geklappt");
            console.log(result);
        }
    });
    connection.end();
    res.render('index', { title: 'Express' });
});

module.exports = router;
