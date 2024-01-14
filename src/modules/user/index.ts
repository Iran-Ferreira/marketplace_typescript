import { PrismaUserRepository } from "./repositories/implementations/prisma-user.repository";
import { CreateUserController } from "./controllers/create-user.controller";
import { CreateUserService } from "./services/create-user.service";
import { FindUserController } from "./controllers/find-user.controller";
import { FindUserService } from "./services/find-user.service";

const repository = new PrismaUserRepository()

const createService = new CreateUserService(repository)
const createController = new CreateUserController(createService)

const findService = new FindUserService(repository)
const findController = new FindUserController(findService)

export {
    createController,
    findController,
}