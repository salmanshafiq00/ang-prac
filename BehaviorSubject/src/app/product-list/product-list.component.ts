import { Component, OnDestroy, OnInit, Inject, inject } from '@angular/core';
import { Product } from '../Models/Product.model';
import { ComponentComunicatorUsingEventEmitterService } from '../services/component-comunicator-using-event-emitter.service';
import { Subject, Subscription, debounce, debounceTime, distinctUntilChanged, filter, from, map, takeUntil } from 'rxjs';
import { ComponentCommunicatorUsingSubjectService } from '../services/component-communicator-using-subject.service';
import { ComponentCommunicatorUsingBehaviorSubjectService } from '../services/component-communicator-using-behavior-subject.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  searchedText: string = '';
  productList: Product[] = [];
  productListForDisplay: Product[] = [];
  productListSubscription: Subscription;

  // inject service
  // private productSearchServiceUsingSubject: ComponentCommunicatorUsingSubjectService = inject(ComponentCommunicatorUsingSubjectService);
  private productSearchServiceUsingSubject: ComponentCommunicatorUsingBehaviorSubjectService = inject(ComponentCommunicatorUsingBehaviorSubjectService);
  private productDetailService: ComponentComunicatorUsingEventEmitterService = inject(ComponentComunicatorUsingEventEmitterService);
  private unsubscribe$ = new Subject<void>();

  // Getter to show up to date product
  get showProductList(): Product[] {
    return this.productListForDisplay;
  }

  getProductList(): void {
    if (!this.searchedText.trim()) {
      this.productListForDisplay = [...this.productList];
    }
    this.productListForDisplay = this.productList.filter(product => product.name.toLowerCase().includes(this.searchedText.toLowerCase()));
  }

  ngOnInit(): void {

    // Subscribe to the productList$ observable
    this.productListSubscription = this.productList$
      .subscribe({
        next: (product) => {
          this.productList.push(product);
        },
        error: error => console.log(error.message),
      });

    // Initialize filtered product list
    this.getProductList();

    // Here searchText is a EventEmitter type Property in Service class
    this.productSearchServiceUsingSubject.searchText.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.unsubscribe$)
    )
      .subscribe((searchText: string) => {
        this.searchedText = searchText;
        this.getProductList();
      });

  }

  ngOnDestroy(): void {
    this.productListSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
    this.unsubscribe$.complete();
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

  // Return Product List Observable
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

  // Show Product Detail in Side Drawer
  showProductDetails(product: Product) {
    this.productDetailService.showProductDetails(product);
  }

}
