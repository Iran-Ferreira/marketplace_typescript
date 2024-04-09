import {
    createController,
    findController

} from "../modules/store"

import { Router, Request, Response } from "express"
import { authMiddleware } from "../modules/user/middlewares/AuthMiddleware"

const routes = Router()


routes.post("/store", authMiddleware(["adm", "vendedor"]), (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/store", (req: Request, res: Response) => {
    findController.handle(req, res)
})


export default routes 