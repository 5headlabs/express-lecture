const Pear = require("../models/pear");

// controller handler function for pear details
exports.getPearDetails = function(req, res) {
    // get the apple id from the URL parameter list
    let pearID = req.params.pearID;
    // TODO: get pear object from model by ID
    Pear.findById(pearID,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.render('fruit', {
                    fruit: {result} // TODO: pass pear data as object into the view
                });
            }
        });
}

exports.createPear = function(req, res) {
    
}