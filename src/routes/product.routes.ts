import {
    createController,
    findController,

} from "../modules/product"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/product/:storeId", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/product", (req: Request, res: Response) => {
    findController.handle(req, res)
})

export default routes