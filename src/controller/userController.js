import express from 'express';
import errormessage from '../utils/errormessage';
import User from '../model/user';
import successmessage from '../utils/successmessage';
import bcrypt from "bcrypt"
import Jwt from 'jsonwebtoken';


class userController{

// <---------------------creste user--------------------->

    static async createuser(req,res){
        const {firstname,lastname,email,password,role}=req.body
        try{
            if(req.body.password!==req.body.confirmpassword){
                return errormessage(res,401,`confirmpassword and password must be match`)
            }

// <---------------------hash password--------------------->

            const hashpassword=bcrypt.hashSync(req.body.password,10)
            const user=await User.create({firstname,lastname,email,password:hashpassword,role})
            return successmessage(res,201,`user created`,user)
        }
        catch(error){
            return errormessage(res,500,`error${error}`)
        }

                // catch(error){
        //     if(error.code==11000){
        //         return errormessage(res,201,`user already exist`)
        //     }
        // }

  
}
// <---------------------get all user--------------------->

    static async getalluser(req,res){
        const user=await User.find()
        if(!user){
            return errormessage(res,201,`user not found`)
        }
        else{
            return successmessage(res,200,`all user ${user.length} found`,user)
        }
    }
// <---------------------get one user--------------------->
   
    static async getoneuser(req,res){
    const id=req.params.id
    const userr=await User.findById(id)
    if(!userr){
        return errormessage(res,401,`user with ${id} not found`)
    }
    else{
        return successmessage(res,200,`user successfuly found`,userr)
    }
   }

// <---------------------delete all user--------------------->
   static async deletealluser(req,res){
    const user=await User.deleteMany()
    return successmessage(res,200,`all user deleted`)
   }

// <---------------------delete one user--------------------->   

  static async deleteoneuser(req,res){
    const id=req.params.id
    const user=await User.findByIdAndDelete(id)
    if(!user){
        return errormessage(res,401,`user with id ${id} not found`)
    }
    else{
        return successmessage(res,200,`user successfuly deleted`)
    }
}

// <---------------------update one user---------------------> 
  
   static async updateoneuser(req,res){
    const id=req.params.id
    const user=await User.findByIdAndUpdate(id,req.body,{new:true})
    if(!user){
        return errormessage(res,401,`user with id ${id} not found`)
    }
    else{
        return successmessage(res,200,`user successfuly updated`,user)
    }
   }

// <---------------------login  user---------------------> 

   static async loginuser(req,res){
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return errormessage(res,401,` inncorect email`)
    }
    else{
    const comparepassword=bcrypt.compareSync(password,user.password)
    if(!comparepassword){
    return errormessage(res,401,`inncorect password`)    
    } 
    else{
    const token= Jwt.sign({role:user.role,firstname:user.firstname,lastname:user.lastname,
                           email:user.email,password:user.password},process.env.SCRET_KEY,{expiresIn:"1d"})  
    return res.status(200).json({
        token:token,
        data:{
            role:user.role,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password:user.password
        }
    })                        
    }   
    }
   }

}
export default userController