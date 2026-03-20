export interface Product {
    _id: string;
    category: Category;
    title: string;
    description: string;
    price: number;
    images: string[];
}

export interface ProductMutation  {
    category: string;
    title: string;
    description: string;
    price: string;
    images: FileList | null;
}

export interface Category {
    _id: number;
    title: string;
    description: string;
}