exports.logActivity = (req, res, next) => {
    // Print activity log to console
    console.log(`Retrieving info for item '${req.params.fruitID}'`);

    // Call next function in middleware chain
    next();
}