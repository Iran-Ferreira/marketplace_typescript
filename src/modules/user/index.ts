import { PrismaUserRepository } from "./repositories/implementations/prisma-user.repository";
import { CreateUserController } from "./controllers/create-user.controller";
import { CreateUserService } from "./services/create-user.service";
import { FindUserController } from "./controllers/find-user.controller";
import { FindUserService } from "./services/find-user.service";
import { FindOneUserController } from "./controllers/find-one-user.controller";
import { FindOneUserService } from "./services/find-one-user.service";
import { LoginUserController } from "./controllers/login-user.controller";
import { LoginUserService } from "./services/login-user.service";
import { DeleteUserController } from './controllers/delete-user.controller';
import { DeleteUserService } from "./services/delete-user.service";
import { UpdateUserController } from './controllers/update-user.controller';
import { UpdateUserService } from "./services/update-user.service";

const repository = new PrismaUserRepository()

const createService = new CreateUserService(repository)
const createController = new CreateUserController(createService)

const findService = new FindUserService(repository)
const findController = new FindUserController(findService)

const findOneService = new FindOneUserService(repository)
const findOneController = new FindOneUserController(findOneService)

const deleteService = new DeleteUserService(repository)
const deleteController = new DeleteUserController(deleteService)

const updateService = new UpdateUserService(repository)
const updateController = new UpdateUserController(updateService)

const loginService = new LoginUserService(repository)
const loginController = new LoginUserController(loginService)

export {
    createController,
    findController,
    findOneController,
    loginController,
    deleteController,
    updateController
}