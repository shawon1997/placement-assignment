const mongoose=require('mongoose')
userSchema=new mongoose.Schema({
    blog:{type:String}
})

const User=mongoose.model('user',userSchema)
module.exports=User