const mongoose = require('mongoose');

const AppleSchema = new mongoose.Schema({
    name: String,
    type: String
});

module.exports = mongoose.model('Apples', AppleSchema);