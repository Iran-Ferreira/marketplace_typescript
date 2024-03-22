import { FindProductService } from "../services/find-product.service";
import { Request, Response } from "express";

export class FindProductController {
    constructor(private readonly service: FindProductService){}
    async handle(request: Request, response: Response): Promise<Response>{
        const products = await this.service.execute()
        return response.json(products)
    }
}