import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from '../user.repository';

export class PrismaUserRepository implements UserRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(name: string, email: string, password: string, accessName: string): Promise<UserEntity> {
        try {
            const user = await this.prisma.user.create({ data: { name, email, password, Access: {
                connect: { name: accessName }
            }}})
            return user
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao criar usuário")
        }
    }

    async find(): Promise<UserEntity[]> {
        try {
            const usuarios = await this.prisma.user.findMany()
            return usuarios
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os usuários")
        }
    }

}