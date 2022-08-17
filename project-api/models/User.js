require("../config/database");
const mongoose = require("mongoose");

const User = mongoose.Schema({
    full_name : String,
    email : String,
    password : String,
    gender : String,
    address : String,
    city : String,
    contact:String
});

module.exports = mongoose.model("user", User);