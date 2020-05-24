import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product = {} as Product;
  testValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductServiceService
  ) {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(productId).subscribe((p) => this.product = p);
    //TODO why this does not work?
    //this.productService.getProduct(productId).toPromise().then(val => console.log(val));
  }

  ngOnInit(): void {

  }

}
