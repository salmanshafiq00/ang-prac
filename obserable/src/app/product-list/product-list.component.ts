import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { ProductSearchService } from '../product-search-service.service';
import { Product } from '../Models/Product.model';
import { ComponentComunicatorUsingEventEmitterService } from '../services/component-comunicator-using-event-emitter.service';
import { Subscription, filter, from, map } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  searchedText: string = '';
  productList: Product[] = [];
  productListSubscription: Subscription;

  constructor(
    private productSearchService: ProductSearchService,
    private productDetailService: ComponentComunicatorUsingEventEmitterService
  ) { }

  ngOnInit(): void {
    this.productSearchService.productSearchedValue.subscribe((eventValue) => {
      this.searchedText = eventValue;
    });

    // Subscribe to the productList$ observable

    // Subscribe to the productList$ observable
    this.productListSubscription = this.productList$
      .subscribe({
        // Handle the next value emitted by the observable
        next: (product) => {
          // Assign the modified products to the component's productList property
          this.productList.push(product);
        },
        // Handle errors that occur during subscription
        error: error => console.log(error.message),
        // Handle the completion of the observable stream
        complete: () => console.log('all products completed')
      });
  }

  ngOnDestroy(): void {
    this.productListSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
  }

  // Dummy product array for demonstration
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

  productList$ = from(this.products)
    .pipe(
      map(product => {
        product.price *= 0.95;
        return product;
      }),
      filter((product) => {
        return product.stockAvailable;
      })
    );

  showProductDetails(product: Product) {
    this.productDetailService.showProductDetails(product);
  }

}
