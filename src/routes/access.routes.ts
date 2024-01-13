import {
    createController,
    findController,

} from "../modules/access"

import { Router, Request, Response } from "express"

const routes = Router()

routes.post("/access", (req: Request, res: Response) => {
    createController.handle(req, res)
})

routes.get("/access", (req: Request, res: Response) => {
    findController.handle(req, res);
});


export default routes 