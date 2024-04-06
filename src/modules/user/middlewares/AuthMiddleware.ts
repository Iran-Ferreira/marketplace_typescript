import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { JWTService } from "../services/JWT-user.service";

const prisma = new PrismaClient()

export function authMiddleware(permissions?: string[]){
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const authHeader = req.headers.authorization

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({ message: "Token não fornecido"})
        }

        const token = authHeader.substring(7)
    
        try {
            const SECRET_KEY = process.env.SECRET_KEY

            if(!SECRET_KEY){
                throw new Error("Chave secreta não fornecida")
            }

            const decodedToken = JWTService.verify(token)

            if(permissions){
                const user = await prisma.user.findUnique({
                    where: {
                        id: decodedToken.id
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
                const userPermissions = user?.userAccess.map((na) => na.Access?.name) ?? []
                const hasPermissions = permissions.some((p) => userPermissions.includes(p))
                
                if(!hasPermissions){
                    return res.status(403).json({ message: "Permissão negada"})
                }
            }
            return next()
        } catch (error) {
            console.log(error)
        }
    
    }
}
