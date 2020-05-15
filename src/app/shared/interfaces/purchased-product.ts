import { Product } from './product';

export interface PurchasedProduct {
    Id: string;
    PurchaseInfo: string;
    Product: Product;
    Count: number;
}
