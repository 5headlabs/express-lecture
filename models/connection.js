const mongoose = require('mongoose');

const dbname = "FruitsDB";
const user = "fruitlover";
const pwd = "irwsjSFYgQnEdpPN";

// Connecting to the database
function connectToDB(){
    mongoose
    // Using DB credentials
    .connect("mongodb+srv://" + user + ":" + pwd + "@cluster0.sextv.mongodb.net/" + dbname + "?retryWrites=true&w=majority")
    // Waiting for a response
    .then(() => {

        console.log("Connected to DB");
    })
    .catch (console.error);

    mongoose.Promise = global.Promise;
}

module.exports = { connectToDB };