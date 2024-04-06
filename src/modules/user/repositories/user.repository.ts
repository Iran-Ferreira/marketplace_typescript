import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
    create(name: string, email: string, password: string, accessId: string): Promise<UserEntity>
    findUserById(id: string): Promise<UserEntity>
    find(): Promise<UserEntity[]>
    update(id: string, name: string, email: string, password: string): Promise<void>
    delete(id: string): Promise<void>
    login(email: string, password: string): Promise<string | undefined>
}