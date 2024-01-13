import { PrismaAccessRepository } from "./repositories/implementations/prisma-access.repository";
import { CreateAccessController } from "./controllers/create-access.controller";
import { CreateAccessService } from "./services/create-access.services";

const repository = new PrismaAccessRepository()

const createService = new CreateAccessService(repository)
const createController = new CreateAccessController(createService)

export {
    createController,
}