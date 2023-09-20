import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
       
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    
      },
    createdate:{
        type:Date,
        default:Date.now()
    }

})
const User=mongoose.model("User",userschema)
export default User