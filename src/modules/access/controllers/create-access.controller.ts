import { CreateAccessService } from "../services/create-access.services";
import { Request, Response } from "express";

export class CreateAccessController {
    constructor(private readonly service: CreateAccessService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body
        await this.service.execute(name)
        return response.json({ message: "Acesso criado com sucesso" })
    }
}