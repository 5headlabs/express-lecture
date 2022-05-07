const mongoose = require('mongoose');

const PearSchema = new mongoose.Schema({
    name: String,
    type: String
});

module.exports = mongoose.model('Pears', PearSchema);