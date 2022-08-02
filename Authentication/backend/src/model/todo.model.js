const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
  name:{type:String,required:true},
  role:{type:String,required:true},
  ctc:{type:String,required:true}
},{
    versionKey:false,timestamps:true
})

const User=mongoose.model("todo",userschema)
module.exports=User
