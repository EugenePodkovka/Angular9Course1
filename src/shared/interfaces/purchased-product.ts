import { Product } from 'src/shared/interfaces/product';

export interface PurchasedProduct {
    Id: string;
    PurchaseInfo: string;
    Product: Product;
    Count: number;
}
