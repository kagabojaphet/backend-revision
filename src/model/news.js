import mongoose from "mongoose";

const newsschema=new mongoose.Schema({
    newsmaintitle:{
        type:String,
        required:true
    },
    newstitle:{
        type:String,
        required:true
    },
    newssummary:{
        type:String,
        required:true
    },
    newsdescription:{
        type:String,
        required:true
    },
    newsimage:{
        type:Array,
        required:true
    },
    publishername:{
        type:String,
        required:true
    },
    publisheddate:{
        type:Date,
        default:Date.now()
    }

})
const News=mongoose.model("News",newsschema)
export default News