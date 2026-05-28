import type { Product } from "../types/Product"

export const products: Product[] = [
    {
        id: "1234",
        name: "book",
        imageUrl: "https://placehold.co/300x300?text=Book",
        price: 19.99,
        inStock: true,
        description: "This a book",
    },
    {   
        id: "12345",
        name: "laptop",
        imageUrl: "https://placehold.co/300x300",
        price: 999.99,
        inStock: false,
        description: "This a laptop",
    },
    {   
        id: "12346",
        name: "shoes",
        imageUrl: "https://placehold.co/300x300",
        price: 69.99,
        inStock: true,
        description: "This a shoe",
    }
]