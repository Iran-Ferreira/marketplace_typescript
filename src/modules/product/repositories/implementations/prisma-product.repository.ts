import { PrismaClient } from "@prisma/client";
import { ProductEntity } from "../../entities/product.entity";
import { ProductRepository } from "../product.repository";

export class PrismaProductRepository implements ProductRepository{
    private prisma: PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(name: string, price: number, amount: number, storeId: string): Promise<void> {
        try {
            await this.prisma.product.create({
                data: { name, price, amount, Store: {
                    connect: {
                        id: storeId
                    }
                }}
            })
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao criar Produto")
        }
    }

    async find(): Promise<ProductEntity[]> {
        try {
            const products = await this.prisma.product.findMany()
            return products
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar produtos")
        }
    }
}