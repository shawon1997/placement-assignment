const mongoose=require("mongoose")
const bcrypt=require('bcrypt')

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true}
})

userSchema.pre("save",function(next){
    const hash=bcrypt.hashSync(this.password,8)
    this.password=hash
    return next()
})

userSchema.methods.CheckPasswordAsync  =function(password){
    return bcrypt.compareSync(password,this.password)
}


const User= mongoose.model("user", userSchema)
module.exports=User