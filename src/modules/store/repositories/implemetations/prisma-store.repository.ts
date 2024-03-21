import { PrismaClient } from "@prisma/client";
import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../store.repository";

export class PrismaStoreRepository implements StoreRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(name: string, userId: string): Promise<void> {
        try {
                await this.prisma.store.create({ data: { name, 
                User: {
                    connect: { id: userId },
                }}})
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao criar Loja")
        }
    }

    async find(): Promise<StoreEntity[]> {
        try {
            const stores = await this.prisma.store.findMany()
            return stores
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todas as lojas")
        }
    }
}