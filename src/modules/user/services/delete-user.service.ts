import { UserRepository } from "../repositories/user.repository";

export class DeleteUserService {
    constructor(private readonly userRepo: UserRepository) {}
    async execute(id: string): Promise<void> {
        await this.userRepo.delete(id)
    }
}