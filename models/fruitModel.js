const mongoose = require('mongoose');

const FruitSchema = new mongoose.Schema({
    creationDate: { type: Date, default: Date.now() },
    type: { type: String, required: true},
    kind: { type: String, required: true},
    origin: { type: String, required: true}
});

module.exports = mongoose.model('Fruits', FruitSchema);