import { Component, ElementRef, Input, inject } from '@angular/core';
import { ProductSearchService } from '../product-search-service.service';
import { Product } from './Product';
import { SearchProductComponent } from '../search-product/search-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductsComponent {

  @Input() searchedText: string = '';
  
  selectedProduct: Product | undefined = undefined;

  productSearchService: ProductSearchService = inject(ProductSearchService);

  getProductList(): Product[] {
    return this.products.filter(x => this.searchedText === ''
      || x.name.toLowerCase().includes(this.searchedText.toLowerCase()));
  }

  setSelectedProduct(prod: Product){
    this.selectedProduct = prod;
  }

  filterProductList(key: string = ''){
    return this.products.filter(x => key === ''
      || x.name.includes(key.toLowerCase()));
  }

  // ngOnInit(): void {
  //   this.productSearchService.productSearchedValue.subscribe((eventValue) => {
  //     this.searchedText = eventValue;
  //   });
  //   this.searchText =
  // }

  products: Product[] = [
    { id: 1, name: 'T-Shirt', price: 20, discount: 5, gender: 'male', color: 'blue', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 2, name: 'Jeans', price: 50, discount: 10, gender: 'male', color: 'black', stockAvailable: false, photo: 'https://picsum.photos/200/150' },
    { id: 3, name: 'Dress', price: 40, discount: 0, gender: 'female', color: 'red', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 4, name: 'Shoes', price: 60, discount: 15, gender: 'female', color: 'white', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 5, name: 'Socks', price: 5, discount: 0, gender: 'unisex', color: 'gray', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 6, name: 'Hat', price: 15, discount: 0, gender: 'unisex', color: 'green', stockAvailable: false, photo: 'https://picsum.photos/200/150' },
    { id: 7, name: 'Jacket', price: 70, discount: 20, gender: 'male', color: 'brown', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 8, name: 'Skirt', price: 35, discount: 5, gender: 'female', color: 'pink', stockAvailable: false, photo: 'https://picsum.photos/200/150' },
    { id: 9, name: 'Sweater', price: 45, discount: 0, gender: 'unisex', color: 'purple', stockAvailable: true, photo: 'https://picsum.photos/200/150' },
    { id: 10, name: 'Shorts', price: 25, discount: 0, gender: 'male', color: 'yellow', stockAvailable: true, photo: 'https://picsum.photos/200/150' }
];



}
