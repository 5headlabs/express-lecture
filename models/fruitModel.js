const mongoose = require('mongoose');

// Create schema for fruits which stores its creation date, type, kind and origin
const FruitSchema = new mongoose.Schema({
    creationDate: { type: Date, default: Date.now() },
    type: { type: String, required: true},
    kind: { type: String, required: true},
    origin: { type: String, required: true}
});

// Export schema FruitSchema as a mongoose model with the name 'Fruits'
module.exports = mongoose.model('Fruits', FruitSchema);