import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  productDetail: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);

  setProductDetail(product: Product){
    this.productDetail.next(product);
  }

  setProductList(products: Product[]){
    this.productList.next(products);
  }

}
