import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../Models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentComunicatorUsingEventEmitterService {

  // product: Product;

  constructor() { }

  product: EventEmitter<Product> = new EventEmitter<Product>();

  showProductDetails(product: Product){
    this.product.emit(product);
  }

  
}
