import { AccessEntity } from "../entities/access.entity";
import { AccessRepository } from "../repositories/access.repository";

export class FindAccessService {
    constructor(private readonly access: AccessRepository){}
    async execute(): Promise<AccessEntity[]> {
        const acessos = await this.access.find()
        return acessos
    }
}