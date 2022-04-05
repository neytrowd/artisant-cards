export interface IProduct {
    product_id: string,
    name: string,
    description: string,
    quantity: number,
    initial_price: number,
    quantity_available: number,
    [key: string]: any
}