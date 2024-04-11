import { CreateUserService } from '../services/create-user.service';
import { Request, Response } from "express";

export class CreateUserController { 
    constructor(private readonly service: CreateUserService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, accessName } = request.body
        await this.service.execute(name, email, password, accessName)
        return response.json({ message: "Usuário criado com sucesso" })
    }
}