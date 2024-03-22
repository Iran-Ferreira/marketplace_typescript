import { ProductEntity } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repository";

export class FindProductService {
    constructor(private readonly findRepo: ProductRepository){}
    async execute(): Promise<ProductEntity[]> {
        const products = await this.findRepo.find()
        return products
    }

}