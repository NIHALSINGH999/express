const mongoose = require('mongoose');

const mongoconnect = ()=>{
    mongoose.connect("mongodb://localhost:27017/Q3").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = mongoconnect