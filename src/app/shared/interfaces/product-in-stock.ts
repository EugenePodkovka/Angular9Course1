import { Product } from './product';

export interface ProductInStock {
    // обычно свойства именуются в нижнем регистре используя camelCase
    Id: string;
    Description: string;
    Product: Product;
    Remaining: number;
}
