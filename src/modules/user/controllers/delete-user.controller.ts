import { Request, Response } from 'express';
import { DeleteUserService } from '../services/delete-user.service';

export class DeleteUserController {
    constructor(private readonly service: DeleteUserService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user
        await this.service.execute(id)
        return response.json({ message: "Usuário removido com sucesso"})
    }
}