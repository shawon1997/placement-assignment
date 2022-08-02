const express=require("express")
const User = require("../model/user.model")
const router=express.Router()

const {body,validationResult} =require("express-validator")

router.post("/",
body("email").not().isEmpty().isEmail().withMessage("Emaiil should not be empty ").bail().custom(async(value)=>{
    let user=await User.findOne({email:value}).lean().exec()
    if(user){
        throw new Error("User already exists")
    }
    return true
}),
body("name").not().isEmpty().isString().withMessage("Name should not be empty and it should be string ").bail(),

body("password").not().isEmpty().bail().isLength({min:8,max:15}).bail().custom(async(value)=>{

    const regex= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(!value.match(regex)){

        throw new Error("Password must be strong")
    }
    return true
}).bail()

,async(req,res)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({error:errors.array()})
        }

        await User.create(req.body)
        return res.status(201).send({"message":"User created"})
    } catch (error) {
        return res.status(401).send(error.message)
    }
})

module.exports=router