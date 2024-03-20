import { StoreEntity } from "../entities/store.entity";

export interface StoreRepository {
    create(name: string, userId: string): Promise<void>
    find(): Promise<StoreEntity[]> 
    //findById(id: string): Promise<StoreEntity>
    //update(id: string, name: string): Promise<void>
    //delete(id: string): Promise<void>
}