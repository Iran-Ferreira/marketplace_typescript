import { PrismaStoreRepository } from "./repositories/implemetations/prisma-store.repository";
import { CreateStoreService } from "./services/create-store.service";
import { CreateStoreController } from "./controllers/create-store.controller";
import { FindStoreController } from "./controllers/find-store.controller";
import { FindStoreService } from "./services/find-store.service";

const repository = new PrismaStoreRepository()

const createService = new CreateStoreService(repository)
const createController = new CreateStoreController(createService)

const findService = new FindStoreService(repository)
const findController = new FindStoreController(findService)

export {
    createController,
    findController,
}