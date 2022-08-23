const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);
    User.create(req.body, ()=>{
        res.send({ success : true });
    })
})
routes.post("/update", (req, res)=>{
    // console.log(req.body);
    User.updateOne({ _id : req.body._id }, req.body, (err, result)=>{
        // console.log(result);
        res.send({ succeses : true });
    })
})


routes.get("/", (req, res)=>{
    // console.log(req.headers.authorization);
    if(req.headers.authorization){
        var token = req.headers.authorization;
        var obj = jwt.decode(token, "tss");
        if(obj){
            var id = obj.id;
            User.findById(id, (err, result)=>{
                res.send(result);
            })

        }else{
            res.send({ msg : "Un-Authorized User"});
            
        }
    }else{
        res.send({ msg : "Un-Authorized User"});
    }
})


module.exports = routes;