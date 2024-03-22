import { Router } from "express";
import AccessRoutes from "./access.routes"
import UserRoutes from "./user.routes"
import StoreRoutes from "./store.routes"
import ProductRoutes from "./product.routes"

const routes = Router()

routes.use(UserRoutes)
routes.use(AccessRoutes)
routes.use(StoreRoutes)
routes.use(ProductRoutes)

export default routes