import mongoose from "mongoose";

const messageschema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
        
    },
    sendatdate:{
        type:Date,
        default:Date.now()
    }
})
const Message=mongoose.model("Message",messageschema)
export default Message