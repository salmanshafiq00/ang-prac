import { Component, Input, inject } from '@angular/core';
import { ProductSearchService } from '../app/product-search-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // @Input() 
  searchedText: string = '';

  productSearchService: ProductSearchService = inject(ProductSearchService);

  getProductList(): Product[] {
    return this.products.filter(x => this.searchedText === '' 
      || x.name.toLowerCase().includes(this.searchedText.toLowerCase()));
  }

  ngOnInit(): void{
    this.productSearchService.productSearchedValue.subscribe((eventValue) => {
      this.searchedText = eventValue;
    });
  }

  products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 20, discount: 5, gender: 'male', color: 'blue', stockAvailable: true },
    { id: 2, name: 'Jeans', price: 50, discount: 10, gender: 'male', color: 'black', stockAvailable: false },
    { id: 3, name: 'Dress', price: 40, discount: 0, gender: 'female', color: 'red', stockAvailable: true },
    { id: 4, name: 'Shoes', price: 60, discount: 15, gender: 'female', color: 'white', stockAvailable: true },
    { id: 5, name: 'Socks', price: 5, discount: 0, gender: 'unisex', color: 'gray', stockAvailable: true },
    { id: 6, name: 'Hat', price: 15, discount: 0, gender: 'unisex', color: 'green', stockAvailable: false },
    { id: 7, name: 'Jacket', price: 70, discount: 20, gender: 'male', color: 'brown', stockAvailable: true },
    { id: 8, name: 'Skirt', price: 35, discount: 5, gender: 'female', color: 'pink', stockAvailable: false },
    { id: 9, name: 'Sweater', price: 45, discount: 0, gender: 'unisex', color: 'purple', stockAvailable: true },
    { id: 10, name: 'Shorts', price: 25, discount: 0, gender: 'male', color: 'yellow', stockAvailable: true }
  ];

}
interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  gender: 'male' | 'female' | 'unisex';
  color: string;
  stockAvailable: boolean;
}