exports.logActivity = (req, res, next) => {
    // Print activity log to console
    console.log(`'${req.ip}' is visiting ${req.url}`);

    // Call next function in middleware stack
    next();
}