import { CreateStoreService } from "../services/create-store.service";
import { Request, Response } from "express";

export class CreateStoreController {
    constructor(private readonly service: CreateStoreService){}
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params
        const { name } = request.body
        await this.service.execute(name, String(userId))
        return response.json({ message: "Store criada com sucesso. "})
    }
}