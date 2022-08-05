const express=require("express")
const router=express.Router()
const jwt=require("jsonwebtoken")
const {body,validationResult}=require("express-validator")
const User=require("../model/user.model")

const newToken=(user)=>{
    return jwt.sign({user},'secretkey')
}

router.post("",
body("email").not().isEmpty().isEmail().withMessage("email box should not be empty").custom(async(value)=>{
    const user=await User.findOne({email:value}).lean().exec()
    if(!user){
        throw new Error("User doesn't exist please Register first")
    }
    return true;
}).bail()
,async(req,res)=>{
    try {
        //console.log(req)
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({error:errors.array()})
        }
        let user=await User.findOne({email:req.body.email}).exec()
        let match=user.checkPassword(req.body.password)
        if(!match){
           return res.status(401).send("Incorrect password")
        }
       const token=newToken(user)
        return res.status(201).send({user,token})
    } catch (err) {
        return res.status(401).send(err.message)
    }
})

module.exports=router;