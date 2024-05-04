import { Component, OnInit, inject } from '@angular/core';
import { ComponentComunicatorUsingEventEmitterService } from '../services/component-comunicator-using-event-emitter.service';
import { Product } from '../Models/Product.model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productDetailService: ComponentComunicatorUsingEventEmitterService = inject(ComponentComunicatorUsingEventEmitterService);

  onClickedClose(){
    this.product = undefined;
  }

  ngOnInit(): void {
    this.productDetailService.product.subscribe((prod) => {
      this.product = prod;
    });
  }
}
