const Fruit = require("../models/fruit");

exports.listFruits = (req, res) => {
    Fruit.find((err, result) => {
        res.render('fruits', {
            fruits: result
        });
    });
}

// controller handler function for fruit details
exports.getFruitDetails = function(req, res) {
    // get the fruit id from the URL parameter list
    let fruitID = req.params.fruitID;
    // get fruit object
    Fruit.findById(fruitID,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.render('fruit', {
                    fruit: result
                });
            }
        });
}

// controller handler function for creating a fruit
exports.createFruit = function(req, res) {
    console.log(req.body);
    let fruit = new Fruit({
        kind: req.body.kind,
        type: req.body.type,
        origin: req.body.origin
    });

    // Save pear object on the database
    fruit.save();

    res.redirect("/fruits");
}