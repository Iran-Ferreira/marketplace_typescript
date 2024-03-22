import { CreateProductService } from "../services/create-product.service";
import { Request, Response } from "express";

export class CreateProductController{
    constructor(private readonly service: CreateProductService){}
    async handle(request: Request, response: Response): Promise<Response> {
        const { storeId } = request.params
        const { name, price, amount } = request.body
        await this.service.execute(name, price, amount, String(storeId))
        return response.json({ message: "Produto criado com sucesso" })
    }
}