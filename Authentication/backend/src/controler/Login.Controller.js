
const express= require("express")
const router= express.Router()
const jwt=require("jsonwebtoken")
//require("dotenv").config()
const {body,validationResult} =require("express-validator")
const User = require("../model/user.model")

const newToken=(user)=>{
    return jwt.sign({user},"Shawon")
}

router.post("/",
body("email").not().isEmpty().isEmail().withMessage("Emaiil should not be empty ").bail().custom(async(value)=>{
    let user=await User.findOne({email:value}).lean().exec()
    if(!user){
        throw new Error("User doesnot exist, Register first")
    }
    return true
}),async(req,res)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({error:errors.array()})
        }
        let user=await User.findOne({email:req.body.email}).lean().exec()
        //  console.log(user)
        //const match= user.checkPassword({password:req.body.password})
        //if(!match){
        //    return res.status(401).send("Incorrect passowrd")
        //}
        const token= newToken(user)
        return res.status(200).send({user,token})
        
    } catch (error) {
        return res.status(401).send(error.message)
    }
})
module.exports=router