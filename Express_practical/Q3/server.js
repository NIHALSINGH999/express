const express = require('express');
const mongoconnect = require('./db.js');
const router = require('./route/emproute.js');

mongoconnect();

const app =express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",router);

app.listen(2000,()=>{
    console.log("connected to server")
})