import { Component, Input } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  selectedProduct: Product | undefined;

  closeModal() {
    this.selectedProduct = undefined;
  }
}
