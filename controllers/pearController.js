//import pear model
const Pear = require("../models/pear");

// controller handler function for pear details
exports.getPearDetails = function(req, res) {
    // get the apple id from the URL parameter list
    let pearID = req.params.pearID;
    // get pear object
    Pear.findById(pearID,
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

exports.createPear = function(req, res) {
    let pear = new Pear({
        name: "PearCopy",
        type: "AwesomePear"
    });

    // Save pear object on the database
    pear.save();
}