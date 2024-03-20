import { FindStoreService } from "../services/find-store.service";
import { Request, Response } from "express";

export class FindStoreController {
    constructor(private readonly service: FindStoreService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const stores = await this.service.execute()
        return response.json(stores)
    }
}