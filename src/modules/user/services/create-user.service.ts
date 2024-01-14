import { UserRepository } from "../repositories/user.repository";
import { UserEntity } from "../entities/user.entity";

export class CreateUserService {
    constructor(private readonly user: UserRepository) {}
    async execute(name: string, email: string, password: string, accessName: string): Promise<UserEntity> {
        const usuario = await this.user.create(name, email, password, accessName)
        return usuario
    }
}