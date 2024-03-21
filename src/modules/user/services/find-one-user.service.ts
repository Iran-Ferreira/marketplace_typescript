import { UserEntity } from '../entities/user.entity';
import { UserRepository } from "../repositories/user.repository";

export class FindOneUserService {
    constructor(private readonly userRepo: UserRepository) {}
    async execute(id: string): Promise<UserEntity> {
        const user = await this.userRepo.findUserById(id)
        return user
    }
}