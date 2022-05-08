const mongoose = require('mongoose');

const dbname = "FruitsDB";
const user = "fruitlover";
const pwd = "irwsjSFYgQnEdpPN";

function connectToDB(){
    mongoose
    .connect("mongodb+srv://" + user + ":" + pwd + "@cluster0.sextv.mongodb.net/" + dbname + "?retryWrites=true&w=majority")
    .then(() => {

        console.log("Connected to DB");
    })
    .catch (console.error);

    mongoose.Promise = global.Promise;
}

module.exports = { connectToDB };