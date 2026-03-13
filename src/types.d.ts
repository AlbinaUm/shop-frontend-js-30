export interface Product {
    _id: string;
    category: Category;
    title: string;
    description: string;
    price: number;
    image: string | null;
}

export interface ProductMutation  {
    category: string;
    title: string;
    description: string;
    price: string;
    image: File | null;
}

export interface Category {
    _id: number;
    title: string;
    description: string;
}