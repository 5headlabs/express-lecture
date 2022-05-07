const Apple = require("../models/apple");
const Pear = require("../models/pear");

exports.listFruits = (req, res) => {
    let fruits = [];
    Apple.find((err, result) => {
        fruits = fruits.concat(result);
        Pear.find((err, result) => {
            fruits = fruits.concat(result);
            res.render('fruits', {
                fruits
            });
        });
    });
}