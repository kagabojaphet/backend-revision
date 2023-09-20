import express from "express";
import messagecontroller from "../controller/messagecontroller";
import verifyaccess from "../middlewares/verifyaccess";

const router=express.Router()

router.post("/",messagecontroller.createmessage)
router.get("/",messagecontroller.getallmessage)
router.get("/:id",messagecontroller.getonemessage)
router.delete("/",verifyaccess,messagecontroller.deleteallmessage)
router.delete("/:id",verifyaccess,messagecontroller.deleteonemessage)

export default router