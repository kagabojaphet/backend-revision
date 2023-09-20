import errormessage from "../utils/errormessage";
import Jwt,{ JsonWebTokenError } from "jsonwebtoken";

const verifyaccess=(req,res,next)=>{
    const token=req.headers["kagabo"]
    if(!token){
        return errormessage(res,401,`no token provided`)
    }
    else{
        try {
            const verifytoken=Jwt.verify(token,process.env.SCRET_KEY,{expiresIn:"1d"})
            if(verifytoken.role!=="admin"){
                return errormessage(res,401,`you not have access`)
            }
            else{
                return next()
            }
        } catch (error) {
            if(error=JsonWebTokenError){
                return errormessage(res,401,"invalid token")
            }
            
        }
    }
}
export default verifyaccess