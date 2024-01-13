import { AccessEntity } from "../entities/access.entity";

export interface AccessRepository {
    create(name: string): Promise<AccessEntity>
    //findById(id: string): Promise<AccessEntity>
    find(): Promise<AccessEntity[]>
    //update(id: string, name: string, updated_at: Date): Promise<void>
    //delete(id: string): Promise<void>
}