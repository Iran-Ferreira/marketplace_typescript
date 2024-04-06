import { PrismaClient } from "@prisma/client";
import { UserEntity } from "../../entities/user.entity";
import { UserRepository } from '../user.repository';
import { hash, compare } from "bcryptjs";
import { JWTService } from "../../services/JWT-user.service";

export class PrismaUserRepository implements UserRepository {
    private prisma
    constructor(){
        this.prisma = new PrismaClient()
    }

    async create(name: string, email: string, password: string, accessName: string): Promise<UserEntity> {
        try {
            const passwordHash = await hash(password, 10)

            password = passwordHash

            const user = await this.prisma.user.create({ data: { name, email, password, userAccess: {
                create: {
                    Access: {
                        connect: {
                            name: accessName
                        }
                    }
                }
            }},
                select: {
                    id: true,
                    name: true,
                    email: true,
                    userAccess: {
                        select: { 
                            Access: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })
            return user
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao criar usuário")
        }
    }

    async find(): Promise<UserEntity[]> {
        try {
            const usuarios = await this.prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    userAccess: {
                        select: {
                            Access: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })
            return usuarios
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar todos os usuários")
        }
    }

    async findUserById(id: string): Promise<UserEntity> {
        try {
            const usuario = await this.prisma.user.findUniqueOrThrow({ 
                where: { 
                    id
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    userAccess: {
                        select: {
                            Access: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                } 
            })
            return usuario
        } catch (error) {
            console.log(error)
            throw new Error("Erro em encontrar um usuário")
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.prisma.user.delete({ where: { id } })
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao deletar usuário")
        }
    }

    async update(id: string, name: string, email: string, password: string): Promise<void> {
        try {
            const user = await this.prisma.user.findUniqueOrThrow({ where: { id }})
            
            if(password){
                const passwordHash = await hash(password, 10)
                user.password = passwordHash
            }

            user.name = name ?? user.name
            user.email = email ?? user.email
        
        } catch (error) {
            console.log(error)
            throw new Error("Erro ao atualizar o usuário")
        }
    }

    async login(email: string, password: string): Promise<string | undefined> {
        try {
            const user = await this.prisma.user.findUnique({ 
                where: {
                    email
                },
                include: {
                    userAccess: {
                        select: {
                            Access: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            })

            if(!user){
                throw new Error("Usuário não encontrado")
            }

            const passwordMatch = await compare(password, user.password)

            if(!passwordMatch){
                throw new Error("Senha incorreta")
            }

            const token = JWTService.sign({ id: user.id })
            return token 
        } catch (error) {
            console.log(error)
        }
    }

}