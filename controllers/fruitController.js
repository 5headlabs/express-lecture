exports.listFruits = (req, res) => {
    res.render('fruits', {
        fruits: [] // TODO: pass all fruit data as an array of objects into the view
    });
}