import { UserRepository } from "../repositories/user.repository";

export class LoginUserService {
    constructor(private readonly userRepo: UserRepository) {}
    async execute(email: string, passwoard: string): Promise<string | undefined>{
        const token = await this.userRepo.login(email, passwoard)
        return token
    }
}