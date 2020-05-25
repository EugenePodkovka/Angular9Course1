import { Component, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-admin-product-in-list',
  templateUrl: './admin-product-in-list.component.html',
  styleUrls: ['./admin-product-in-list.component.scss']
})
export class AdminProductInListComponent {
  @Input() product: Product;
  @Input() productRemaining: number;

  onSaveClick() {
    
  }
}
