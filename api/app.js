require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.connect(process.env.DB_URI, {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=>{
    app.listen(3001, ()=>{
        console.log('listening to port 3001');
    });
})
.catch(err =>{console.log(err);})

//Mongoose models

const userModel = require('./models/user');

//Routes

app.use(cors());
app.use(express.json());

app.post('/user/register', (req, res)=>{
    try{
        res.setHeader('Content-Type', 'application/json');
        
        let user = new userModel({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            age:req.body.age,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        });
        user.save()
        .then((info)=>{
            let data = {success:true, info:info};
            res.json(data);
        })
        .catch((err)=>{
            let data = {success:false, info:err};
            res.json(data);
        });
        console.log('Registering processed');
    }
    catch(e){
        console.log(e);
    }
})