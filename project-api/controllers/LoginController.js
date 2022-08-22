const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    var e = req.body.email;
    var p = sha1(req.body.password);
    User.find({ email : e }, (err, result)=>{
        if(result.length == 0){
            res.send({ success : false, errorType : 1 });
        }else{
            if(result[0].password == p){
                var id = result[0]._id; // { id : 100 }
                var token = jwt.sign({ id : id }, "tss");
                res.send({ success : true, token : token });
            }else{
                
                res.send({ success : false, errorType : 2 });
           }
        }
    })
})

module.exports = routes;