import { Component, Input, OnInit } from '@angular/core';
import { ProductsComponent } from '../product/product.component';
import { Product } from '../product/Product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  @Input()
  productListCom: ProductsComponent | undefined = undefined;

  selectedProduct: Product | undefined = new Product();

  closeModal() {
    this.selectedProduct = undefined;
  }

  ngOnInit(): void {
    this.selectedProduct = this.productListCom?.selectedProduct;
  }
}
