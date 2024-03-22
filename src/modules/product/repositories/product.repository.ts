import { ProductEntity } from "../entities/product.entity";

export interface ProductRepository {
    create(name: string, price: number, amount: number, storeId: string): Promise<void>
    find(): Promise<ProductEntity[]>
}