const mongoose = require('mongoose');

const dbname = "FruitsDB";
const user = "fruitlover";
const pwd = "irwsjSFYgQnEdpPN";

function connectToDB(){
    mongoose
    .connect("mongodb+srv://" + user + ":" + pwd + "@cluster0.sextv.mongodb.net/" + dbname + "?retryWrites=true&w=majority")
    .then(() => {

        console.log("Connected to DB");
    
        //AddApple();
        //AddPear();
    })
    .catch (console.error);

    mongoose.Promise = global.Promise;
}

function createAple(){
    let apple = new AppleModel({
        type: "Pink Lady"
    });
    
    apple.save();
    console.log("Apple added");
}

function createPear(){
    let pear = new PearModel({
        type: "Blue Boy"
    });
    
    pear.save();
    console.log("Apple added");
}

function findApple(appleName){
    AppleModel.findOne({type: appleName },
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

function findPear(pearName){
    AppleModel.findOne({type: pearName },
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

module.exports = { connectToDB };