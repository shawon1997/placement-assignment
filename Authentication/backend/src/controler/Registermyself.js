const express=require("express")
const router=express.Router()
const User=require("../model/user.model")
const {body,validationResult}=require("express-validator")

router.post("",
body("email").not().isEmpty().isEmail().withMessage("email should not be empty and must be in email format").custom(async(value)=>{
    let user= await User.findOne({email:value}).lean().exec()
    if(user){
        throw error("user already exit")
    }
    return true;
}),
body("name").not().isEmpty().isString().withMessage("Name  must be String").bail(),
body("password").not().isEmpty().isLength({min:8,max:15}).custom(async(value)=>{
    const regex=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(!value.match(regex)){
        throw new Error("Password must be Strong")
    }
    return true;
}),
async(req,res)=>{
try {
    const errors=validationResult(req)
    if(!errors.isEmpty()){
       return res.status(401).send({error:errors.array()})
    }
    await User.create(req.body)
    return res.status(201).send("user creation sucessfull")
} catch (err) {
    return res.status(401).send(err.message)
}
})

module.exports=router;