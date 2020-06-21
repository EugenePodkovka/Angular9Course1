import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductEditResolver implements Resolve<any> {

    constructor(
        private productService: ProductService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Observable<any>(obs => {
            this.getProduct(route, (resultProduct) => {
                obs.next({ product: resultProduct });
                obs.complete();
            });
        });

        // TODO what if 2 next functions in the observable?
    }

    getProduct(route: ActivatedRouteSnapshot, callback?: (p: Product) => any) {
        return this.productService.getProduct(route.paramMap.get('id')).subscribe((p) => {
            callback?.call(this, p);
        });
    }
}
