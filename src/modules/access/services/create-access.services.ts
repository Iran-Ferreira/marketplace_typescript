import { AccessRepository } from "../repositories/access.repository";
import { AccessEntity } from "../entities/access.entity";

export class CreateAccessService {
    constructor(private readonly access: AccessRepository) {}
    async execute(name: string): Promise<AccessEntity>{
        const acesso = await this.access.create(name)
        return acesso
    }
}