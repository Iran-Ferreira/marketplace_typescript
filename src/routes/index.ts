import { Router } from "express";
import AccessRoutes from "./access.routes"

const routes = Router()

routes.use(AccessRoutes)

export default routes