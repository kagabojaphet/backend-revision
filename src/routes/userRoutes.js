import express from 'express'
import userController from '../controller/userController'
import datacheck from '../middlewares/datacheck'
import validator from '../middlewares/validator'
import verifyaccess from '../middlewares/verifyaccess'

const router = express.Router()

router.post("/",
datacheck.userregisterisempty,
datacheck.emailexist,
validator.useraccountrule(),
validator.inputvalidator,
userController.createuser)

router.get("/",verifyaccess,userController.getalluser)
router.get("/:id",userController.getoneuser)
router.delete("/",userController.deletealluser)
router.delete("/:id",userController.deleteoneuser)
router.patch("/:id",userController.updateoneuser)
router.post("/login",userController.loginuser)

export default router;