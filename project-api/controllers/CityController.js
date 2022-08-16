const routes = require("express").Router();
const City = require("../models/City");

routes.get("/", (req, res)=>{
    City.find((err, result)=>{
        // console.log(result);
        res.send(result);
    })
})


module.exports = routes;