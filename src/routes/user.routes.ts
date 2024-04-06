import {
    createController,
    findController,
    findOneController,
    loginController

} from "../modules/user"

import { Router, Request, Response } from "express"
import { authMiddleware } from "../modules/user/middlewares/AuthMiddleware"

const routes = Router()

routes.post("/user", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/find-all-user", authMiddleware(["adm"]), (req: Request, res: Response) => {
    findController.handle(req, res);
});

routes.get("/find-user-one", authMiddleware(["adm", "vendedor", "comprador"]), (req: Request, res: Response) => {
    findOneController.handle(req, res);
});

routes.post("/login", (req: Request, res: Response) => {
    loginController.handle(req, res)
})

export default routes