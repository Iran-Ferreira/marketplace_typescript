import { Router } from "express";
import AccessRoutes from "./access.routes"
import UserRoutes from "./user.routes"

const routes = Router()

routes.use(UserRoutes)
routes.use(AccessRoutes)

export default routes