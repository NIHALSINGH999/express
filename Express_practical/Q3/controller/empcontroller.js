const usermodel = require('../model/empmodel.js');

const add = async (req,res)=>{
    const data = new usermodel(req.body);
    const result = await data.save();
    res.json(result);
}

const update = async (req,res)=>{
    const {id,name,salary} = req.body;
    const result = await usermodel.findByIdAndUpdate({_id:id},{name,salary});
    res.json({
        message:"data updated",
        data:result
    })
}
const deleteUser = async (req,resp)=>{
    const {id} = req.body;
    const result = await usermodel.findByIdAndDelete({_id:id});
    resp.json({
        message:"data deleted",
        data:result
    })
}
const show = async (req,resp)=>{
    const result = await usermodel.find();
    resp.json({
        message:"user list",
        data:result
    })
}

module.exports = {add,update,deleteUser,show}

