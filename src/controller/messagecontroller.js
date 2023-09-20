import Message from "../model/message";
import successmessage from "../utils/successmessage";
import errormessage from "../utils/errormessage";

class messagecontroller{
    static async createmessage(req,res){
            const mssg = await Message.create(req.body);
            try {
              if (!mssg) {
                return errormessage(res, 401, `message not sent`);
              } else {
                return successmessage(res, 201, `message successfuly `, mssg);
              }
            } catch (error) {
              return errormessage(res, 404, error);
            }
          }
          static async getallmessage(req,res){
            const mssg=await Message.find()
            try {
                if(!mssg){
                    return errormessage(res,401,`message not found`)
                }
                else{
                    return successmessage(res,200,`message ${mssg.length} successfuly retrieved`,mssg)
                }
            } catch (error) {
                return errormessage(res,404,error)
            }
          }
          static async getonemessage(req,res){
            const id=req.params.id
            const mssg=await Message.findById(id)
            try {
                if(!mssg){
                    return errormessage(res,401,`message with id: ${id} not found`)
                }
                else{
                    return successmessage(res,200,`message successfuly retrieved`,mssg)
                }
            } catch (error) {
                return errormessage(res,404,error)
            }

          }
          static async deleteallmessage(req,res){
            const mssg=await Message.deleteMany()
            try {
              if(!mssg){
                return errormessage(res,401,`all message not deleted`)
              }
              else{
                return successmessage(res,200,`all message successfuly deleted`)
              }
            } catch (error) {
              return errormessage(res,404,error)
            }
          }
          static async deleteonemessage(req,res){
            const id=req.params.id
            const mssg=await Message.findByIdAndDelete(id)
            try {
              if(!mssg){
                return errormessage(res,401,`message not deleted`)
              }
              else{
                return successmessage(res,201,`message successfuly deleted`)
              }
            } catch (error) {
              return errormessage(res,404,error)
            }
          }
}
export default messagecontroller