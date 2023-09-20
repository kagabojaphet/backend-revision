import express from "express";
import User from "../model/user";
import errormessage from "../utils/errormessage";

class datacheck{
    static userregisterisempty(req,res,next){
        const {firstname,lastname,email,password}=req.body
        if(firstname==""){
            return errormessage(res,401,`please write your name correctly`)
        }
        else if(lastname=="") {
            return errormessage(res,401,`please write your name correctly`)
        }
        else if(email=="") {
            return errormessage(res,401,`please write your email correctly`)
        }
        else if(password=="") {
            return errormessage(res,401,`please write your password correctly`)
        }
        else{
            return next()
        }
    }
    static async emailexist(req,res,next){
        const {email}=req.body
        const user=await User.findOne({email})
        if(user){
            return errormessage(res,401,`email already exist`)
        }
        else{
            return next()
        }
    }
}
export default datacheck