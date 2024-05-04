import { Injectable } from '@angular/core';
import { Product } from '../models/Product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductStaticDataService {

  constructor() { }

  products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 220, discount: 5, gender: 'male', color: 'blue', stockAvailable: true },
    { id: 2, name: 'Jeans', price: 250, discount: 10, gender: 'male', color: 'black', stockAvailable: false },
    { id: 3, name: 'Dress', price: 240, discount: 0, gender: 'female', color: 'red', stockAvailable: true },
    { id: 4, name: 'Shoes', price: 260, discount: 15, gender: 'female', color: 'white', stockAvailable: true },
    { id: 5, name: 'Socks', price: 25, discount: 0, gender: 'unisex', color: 'gray', stockAvailable: true },
    { id: 6, name: 'Hat', price: 215, discount: 0, gender: 'unisex', color: 'green', stockAvailable: false },
    { id: 7, name: 'Jacket', price: 270, discount: 20, gender: 'male', color: 'brown', stockAvailable: true },
    { id: 8, name: 'Skirt', price: 235, discount: 5, gender: 'female', color: 'pink', stockAvailable: false },
    { id: 9, name: 'Sweater', price: 245, discount: 0, gender: 'unisex', color: 'purple', stockAvailable: true },
    { id: 10, name: 'Shorts', price: 225, discount: 0, gender: 'male', color: 'yellow', stockAvailable: true }
  ];
}
