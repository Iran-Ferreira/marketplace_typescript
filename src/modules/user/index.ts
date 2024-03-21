import { PrismaUserRepository } from "./repositories/implementations/prisma-user.repository";
import { CreateUserController } from "./controllers/create-user.controller";
import { CreateUserService } from "./services/create-user.service";
import { FindUserController } from "./controllers/find-user.controller";
import { FindUserService } from "./services/find-user.service";
import { FindOneUserController } from "./controllers/find-one-user.controller";
import { FindOneUserService } from "./services/find-one-user.service";

const repository = new PrismaUserRepository()

const createService = new CreateUserService(repository)
const createController = new CreateUserController(createService)

const findService = new FindUserService(repository)
const findController = new FindUserController(findService)

const findOneService = new FindOneUserService(repository)
const findOneController = new FindOneUserController(findOneService)

export {
    createController,
    findController,
    findOneController,
}