import { Product } from './product';

export interface ProductInStock {
    Id: string;
    Description: string;
    Product: Product;
    Remaining: number;
}
