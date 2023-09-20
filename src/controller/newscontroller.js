import { param } from "express-validator";
import News from "../model/news";
import errormessage from "../utils/errormessage";
import successmessage from "../utils/successmessage";

class newscontroller{
    static async createnews(req,res){
        const news=await News.create(req.body);
        try {
            if(!news){
                return errormessage(res,401,`news not posted`)
            }
            else{
                return successmessage(res,201,`news successfuly posted`,news)
            }
        } catch (error) {
            return error(res,404,error)
        }
    }
    static async getallnews(req,res){
        const news= await News.find()
        try {
            if(!news){
                return errormessage(res,401,`news not found`)
            }
            else{
                return successmessage(res,201,`news ${news.length} successfuly retrieved`,news)
            }
        } catch (error) {
            return errormessage(res,404,error)
        }
    }
    static async getonenews(req,res){
        const id=req.params.id
        const news=await News.findById(id)
        try {
            if(!news){
                return errormessage(res,401,`news with id: ${id} not found`)
            }
            else{
                return successmessage(res,201,`news successfuly retrieved`,news)
            }
        } catch (error) {
            return errormessage(res,404,error)
        }
    }
    static async updatenews(req,res){
        const id=req.params.id
        const news=await News.findByIdAndUpdate(id,req.body,{new:true})
        try {
            if(!news){
                return errormessage(res,401,`news with id: ${id} not found`)
            }
            else{
                return successmessage(res,201,`news successfuly updated`,news)
            }
        } catch (error) {
            return errormessage(res,404,error)
        }
    }
    static async deleteonews(req,res){
        const id=req.params.id
        const news=await News.findByIdAndDelete(id)
        try {
            if(!news){
                return errormessage(res,401,`news with id: ${id} not found`)
            }
            else{
                return errormessage(res,201,`news successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,404,error)
        }
    }
    static async deleteallnews(req,res){
        const news=await News.deleteMany()
        try {
            if(!news){
                return errormessage(res,401,`news not deleted`)
            }
            else{
                return successmessage(res,201,`all news successfuly deleted`)
            }
        } catch (error) {
            return errormessage(res,404,error)
        }
    }


}
export default newscontroller