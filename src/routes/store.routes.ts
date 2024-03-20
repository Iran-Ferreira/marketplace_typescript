import {
    createController,
    findController

} from "../modules/store"

import { Router, Request, Response } from "express"

const routes = Router()


routes.post("/store/:userId", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/store", (req: Request, res: Response) => {
    findController.handle(req, res)
})


export default routes 