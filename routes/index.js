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
    let cards;
    connection.connect();
    connection.query("SELECT * FROM cards;", function (err, result) {
        if (err) {
            throw err;
            console.log(err);
        } else {
            console.log("Hat geklappt");
            cards = result;
            console.log(cards);
            res.render('index', {cards});
        }
    });
    connection.end();


});


module.exports = router;

