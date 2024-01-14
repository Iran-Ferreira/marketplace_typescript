import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class FindUserService {
    constructor(private readonly user: UserRepository) {}
    async execute(): Promise<UserEntity[]> {
        const usuarios = await this.user.find()
        return usuarios
    }
}