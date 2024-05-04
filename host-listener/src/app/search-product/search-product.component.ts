import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ProductSearchService } from '../product-search-service.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent {

  searchedText: string = '';

  // @Output() 
  // productSearchedValue: EventEmitter<string> = new EventEmitter<string>();

  productSearchService: ProductSearchService = inject(ProductSearchService);

  onSearchButtonClicked() {
    // this.productSearchedValue.emit(this.searchedText);
    this.productSearchService.productSearchedValue.emit(this.searchedText);
  }
}
