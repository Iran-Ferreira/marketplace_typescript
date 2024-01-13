import { FindAccessService } from "../services/find-access.service";
import { Request, Response } from 'express';

export class FindAccessController {
    constructor(private readonly service: FindAccessService) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const acessos = await this.service.execute()
        return response.json(acessos)
    }
}