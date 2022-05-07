//import apple model
const Apple = require("../models/apple");

// controller handler function for apple details
exports.getAppleDetails = function(req, res) {
    // get the apple id from the URL parameter list
    let appleID = req.params.appleID;
    // TODO: get apple object from model by ID
    Apple.findById(appleID,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.render('fruit', {
                    fruit: result // TODO: pass apple data as object into the view
                });
            }
        });
}

exports.createApple = function(req, res) {
    
}