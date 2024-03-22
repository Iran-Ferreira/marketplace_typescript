import { PrismaClient } from "@prisma/client";
import { StoreEntity } from "../../entities/store.entity";
import { StoreRepository } from "../store.repository";
import { PrismaUserRepository } from "../../../user/repositories/implementations/prisma-user.repository";

export class PrismaStoreRepository implements StoreRepository {
    private prisma: PrismaClient
    private userRepository: PrismaUserRepository
    constructor(){
        this.prisma = new PrismaClient()
        this.userRepository = new PrismaUserRepository()
    }

    async create(name: string, userId: string): Promise<void> {
        try {
                const user = await this.userRepository.findUserById(userId)
                if(!user){
                    throw new Error("Usuário não encontrado")
                }

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
            const stores = await this.prisma.store.findMany({
                select: {
                    id: true,
                    name: true, 
                    User: {
                        select: {
                            name: true
                        }
                    },
                    Product: true
                }
            })
            return stores
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todas as lojas")
        }
    }
}