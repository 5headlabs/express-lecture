const Fruit = require("../models/fruitModel");

// List all fruits
exports.listFruits = (req, res) => {
    Fruit.find((err, result) => {
        res.render('fruits', {
            fruits: result,
            creation_url: '/fruits/fruit/create'
        });
    });
}

// Controller handler function for fruit details
exports.getFruitDetails = function(req, res) {
    // Get the fruit id from the URL parameter list
    let fruitID = req.params.fruitID;
    // Get fruit object
    Fruit.findById(fruitID,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                //console.log(result);
                res.render('fruit', {
                    fruit: result,
                    back_url: "/fruits"
                });
            }
        });
}

// Controller handler function for creating a fruit
exports.createFruit = function(req, res) {
    console.log(req.body);
    let fruit = new Fruit({
        kind: req.body.kind,
        type: req.body.type,
        origin: req.body.origin
    });

    // Save fruit object on the database
    fruit.save();

    res.redirect("/fruits");
}