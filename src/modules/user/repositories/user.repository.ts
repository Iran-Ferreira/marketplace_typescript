import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
    create(name: string, email: string, password: string, accessName: string): Promise<UserEntity>
    //findById(id: number): Promise<UserEntity>
    find(): Promise<UserEntity[]>
    //update(id: string, name: string, email: string, password: string): Promise<void>
    //delete(id: number): Promise<void>
}