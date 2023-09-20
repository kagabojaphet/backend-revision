import express  from "express";
import userRoutes from "./userRoutes"
import messageroutes from "./messageroutes"
import newsroutes from "./newsroutes"

const router = express.Router()

router.use("/user",userRoutes)
router.use("/message",messageroutes)
router.use("/news",newsroutes)

export default router