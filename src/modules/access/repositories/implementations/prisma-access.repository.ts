import { PrismaClient } from "@prisma/client";
import { AccessRepository } from "../access.repository";
import { AccessEntity } from "../../entities/access.entity";

export class PrismaAccessRepository implements AccessRepository {
    private prisma 
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(name: string): Promise<AccessEntity> {
        try {
            const access = await this.prisma.access.create({ data: { name } })
            return access
        } catch (error) {
            console.log(error)
            throw new Error("Erro em criar acesso")
        }
    }

    async find(): Promise<AccessEntity[]> {
        try {
            const accesses = await this.prisma.access.findMany()
            return accesses
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os acesos")
        }
    }


}