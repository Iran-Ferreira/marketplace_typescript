import { StoreEntity } from "../entities/store.entity";
import { StoreRepository } from "../repositories/store.repository";

export class FindStoreService {
    constructor(private readonly store: StoreRepository) {}
    async execute(): Promise<StoreEntity[]>{
        const stores = await this.store.find()
        return stores
    }
}