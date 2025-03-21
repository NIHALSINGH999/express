const express = require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Q3").then(() => {
    console.log("connected to database")
}).catch((err) => {
  console.log(err)  
});

const userSchema = new mongoose.Schema({
    name:String,
    salary:Number
},{collection:"users"})

const usermodel = mongoose.model("user",userSchema);

const app = express();

app.set('view engine','ejs')

app.get("/",async (req,resp)=>{
    const result = await usermodel.find();
    resp.render("show",{result})
})

app.listen(2000,()=>{
    console.log("connected to server")
})