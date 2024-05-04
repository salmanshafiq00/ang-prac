import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ProductSearchService } from '../product-search-service.service';
import { ComponentCommunicatorUsingSubjectService } from '../services/component-communicator-using-subject.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent {

  searchedText: string = '';

  // inject service
  productSearchServiceUsingSubject: ComponentCommunicatorUsingSubjectService = inject(ComponentCommunicatorUsingSubjectService);

  // Here getSearchValue is a method that emit value in Service class
  onSearchButtonClicked() {
    this.productSearchServiceUsingSubject.getSearchValue(this.searchedText); 
  }
}
