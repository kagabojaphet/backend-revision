import newscontroller from "../controller/newscontroller";
import express  from "express";
import verifyaccess from "../middlewares/verifyaccess";


const router=express.Router()

router.post("/",newscontroller.createnews)
router.get("/",newscontroller.getallnews)
router.get("/:id",newscontroller.getonenews)
router.patch("/:id",verifyaccess,newscontroller.updatenews)
router.delete("/:id",verifyaccess,newscontroller.deleteonews)
router.delete("/",verifyaccess,newscontroller.deleteallnews)

export default router