import { Request, Response } from 'express';
import { LoginUserService } from '../services/login-user.service';

export class LoginUserController {
    constructor(private readonly service: LoginUserService) {}
    async handle(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body
        const token = await this.service.execute(email, password)
        return response.json(token)
    }
}