const mongoose=require("mongoose")

const connect=()=>{
    mongoose.connect("mongodb+srv://Shawon1997:Shawon1997@cluster0.mhxnr.mongodb.net/test")
}
module.exports=connect