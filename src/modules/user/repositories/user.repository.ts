import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
    create(name: string, email: string, password: string, accessId: string): Promise<UserEntity>
    findById(id: string): Promise<UserEntity>
    find(): Promise<UserEntity[]>
    update(id: string, name: string, email: string, password: string): Promise<void>
    delete(id: string): Promise<void>
}