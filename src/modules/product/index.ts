import { PrismaProductRepository } from "./repositories/implementations/prisma-product.repository";
import { CreateProductController } from "./controllers/create-product.controller";
import { CreateProductService } from "./services/create-product.service"; 
import { FindProductController } from "./controllers/find-product.controller";
import { FindProductService } from "./services/find-product.service";

const repository = new PrismaProductRepository()

const createService = new CreateProductService(repository)
const createController = new CreateProductController(createService)

const findService = new FindProductService(repository)
const findController = new FindProductController(findService)

export {
    createController,
    findController,
}