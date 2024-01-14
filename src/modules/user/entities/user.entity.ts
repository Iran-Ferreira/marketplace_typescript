export interface UserEntity {
    id: string
    name: string
    email: string
    password: string
    accessId: string | null
    created_at: Date
    updated_at: Date
}