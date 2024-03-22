import { ProductRepository } from "../repositories/product.repository";

export class CreateProductService {
    constructor(private readonly productRepo: ProductRepository){}
    async execute(name: string, price: number, amount: number, storeId: string){
        await this.productRepo.create(name, price, amount, storeId)
    }
}