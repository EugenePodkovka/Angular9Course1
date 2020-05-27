import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { Product } from 'src/app/shared/interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductEditResolver implements Resolve<any> {

    constructor(
        private productService: ProductServiceService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Observable<any>(obs => {
            this.getProduct(route, (resultProduct) => {
                this.getTotalRemaining(resultProduct, (resultRemaining) => {
                    obs.next({
                        product: resultProduct,
                        remaining: resultRemaining
                    });
                    obs.complete();
                });
            });
        });

        // TODO what if 2 next functions in the observable?
    }

    getProduct(route: ActivatedRouteSnapshot, callback?: (p: Product) => any) {
        return this.productService.getProduct(route.paramMap.get('id')).subscribe((p) => {
            callback?.call(this, p);
        });
    }

    getTotalRemaining(p: Product, callback?: (r: number) => any) {
        if (p?.Id) {
            this.productService.getProductTotalRemaining(p.Id).subscribe((totalRemaining) => {
                callback?.call(this, totalRemaining);
            });
        } else {
            callback?.call(this);
        }
    }
}
