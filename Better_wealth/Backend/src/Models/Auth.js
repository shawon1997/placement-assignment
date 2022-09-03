const mongoose=require('mongoose')
const bcrypt=require('bcrypt');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    hash_password:{
        type:String,
        required:true, 
        min:8, 
    },
    role:{
        type:String,
        enum:['user','admin'],
        required:true
        
        
    },
    contactnumber:{
        type:String,
    }
},{
    timestamps:true,
    versionKey:false
})

userSchema.virtual('password')
.set(function(password){
    this.hash_password=bcrypt.hashSync(password,10)
})


userSchema.methods={
    authenticate:function(password){
        return bcrypt.compareSync(password,this.hash_password)
    }
}

const userModel  = mongoose.model('user',userSchema);

module.exports =  userModel