import {
    createController,
    findController,

} from "../modules/product"

import { Router, Request, Response } from "express"
import { authMiddleware } from "../modules/user/middlewares/AuthMiddleware"

const routes = Router()

routes.post("/product/:storeId", authMiddleware(["adm", "vendedor"]), (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/product", (req: Request, res: Response) => {
    findController.handle(req, res)
})

export default routes