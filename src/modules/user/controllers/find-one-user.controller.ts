import { FindOneUserService } from "../services/find-one-user.service";
import { Request, Response } from 'express';

export class FindOneUserController {
    constructor(private readonly service: FindOneUserService) {} 
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user
        const user = await this.service.execute(id)
        return response.json(user) 
    }
}