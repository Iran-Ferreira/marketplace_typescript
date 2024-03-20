import { StoreRepository } from "../repositories/store.repository";

export class CreateStoreService {
    constructor(private readonly store: StoreRepository) {}
    async execute(name: string, userId: string): Promise<void> {
        await this.store.create(name, userId)
    }
}