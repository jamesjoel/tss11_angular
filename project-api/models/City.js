require("../config/database");
const Mongoose = require("mongoose");

const city = new Mongoose.Schema({
    
    id : String,
    name : String, 
    State : String
}, { collection : 'city' })

module.exports = Mongoose.model("city", city);