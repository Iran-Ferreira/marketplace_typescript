import { UserRepository } from "../repositories/user.repository";

export class CreateUserService {
    constructor(private readonly user: UserRepository) {}
    async execute(name: string, email: string, password: string, accessName: string): Promise<void> {
        await this.user.create(name, email, password, accessName)
    }
}