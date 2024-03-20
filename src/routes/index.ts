import { Router } from "express";
import AccessRoutes from "./access.routes"
import UserRoutes from "./user.routes"
import StoreRoutes from "./store.routes"

const routes = Router()

routes.use(UserRoutes)
routes.use(AccessRoutes)
routes.use(StoreRoutes)

export default routes