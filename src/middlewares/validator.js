import { check,validationResult } from "express-validator";
import errormessage from "../utils/errormessage";

class validator{
    static inputvalidator(req,res,next){
        const error=validationResult(req)
      if(!error==error.isEmpty()){
        error.errors.map((err)=>{
            return errormessage(res,401,err.msg) 
        })
 
      }else{
        return next()
      }
      

    }
  
    static useraccountrule(){
        return [
            check("firstname","Please write your firstname correctly").trim().isAlpha(),
            check("lastname","Please write your lastname correctly").trim().isAlpha(),
            check("email","PLease write your email correctly").trim().isEmail(),
            check("password","Provide strong password").trim().isStrongPassword()
        ]
    }
  

}
export default validator