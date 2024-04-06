import {
    createController,
    findController,

} from "../modules/access"

import { Router, Request, Response } from "express"
import { authMiddleware } from "../modules/user/middlewares/AuthMiddleware"

const routes = Router()

routes.post("/access", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/access", authMiddleware(["adm", "vendedor"]), (req: Request, res: Response) => {
    findController.handle(req, res);
});


export default routes 