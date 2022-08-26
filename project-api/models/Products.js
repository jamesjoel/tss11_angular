require("../config/database");
const Mongoose = require("mongoose");

const Products = new Mongoose.Schema({
    
    id : Number,
    title : String, 
    Price : Number,
    description : String,
    category : String,
    image : String,
    rating : Object
})

module.exports = Mongoose.model("products", Products);