// controller handler function for apple details
exports.getAppleDetails = function(req, res) {
    // get the apple id from the URL parameter list
    let appleID = req.params.appleID;
    // TODO: get apple object from model by ID
    res.render('fruit', {
        fruit: {} // TODO: pass apple data as object into the view
    });
}

exports.createApple = function(req, res) {
    
}