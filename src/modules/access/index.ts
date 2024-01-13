import { PrismaAccessRepository } from "./repositories/implementations/prisma-access.repository";
import { CreateAccessController } from "./controllers/create-access.controller";
import { CreateAccessService } from "./services/create-access.services";
import { FindAccessController } from "./controllers/find-access.controller";
import { FindAccessService } from "./services/find-access.service";

const repository = new PrismaAccessRepository()

const createService = new CreateAccessService(repository)
const createController = new CreateAccessController(createService)

const findService = new FindAccessService(repository)
const findController = new FindAccessController(findService) 

export {
    createController,
    findController,
}