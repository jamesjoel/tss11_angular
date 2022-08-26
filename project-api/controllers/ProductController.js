const routes = require("express").Router();
const Products = require("../models/Products");

routes.get("/", (req, res)=>{
    Products.find((err, result)=>{
        // console.log(result);
        res.send(result);
    })
})


module.exports = routes;