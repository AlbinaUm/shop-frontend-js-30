export interface Product {
    id: string;
    category: {
        title: string
    };
    title: string;
    description: string;
    price: number;
    image: string | null;
}

export interface ProductMutation  {
    category_id: string;
    title: string;
    description: string;
    price: string;
    image: File | null;
}

export interface Category {
    id: number;
    title: string;
    description: string;
}