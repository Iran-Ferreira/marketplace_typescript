export interface ProductEntity {
    id: string
    name: string
    price: number
    amount: number
    storeId: string | null
    created_at: Date
    updated_at: Date
}