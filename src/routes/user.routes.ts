import {
    createController,
    findController,
    findOneController,

} from "../modules/user"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/user", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/user", (req: Request, res: Response) => {
    findController.handle(req, res);
});

routes.get("/user/:id", (req: Request, res: Response) => {
    findOneController.handle(req, res);
});

export default routes