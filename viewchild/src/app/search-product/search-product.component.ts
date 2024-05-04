import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { ProductSearchService } from '../product-search-service.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent implements AfterViewInit {

  searchedText: string = '';

  // @Output() 
  // productSearchedValue: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchValue') inputElRef: ElementRef | undefined;

  productSearchService: ProductSearchService = inject(ProductSearchService);

  onSearchButtonClicked() {
    // this.productSearchService.productSearchedValue.emit(value);
    console.log()
    this.searchedText = this.inputElRef?.nativeElement.value;
  }

  ngAfterViewInit(): void {
    this.inputElRef?.nativeElement.focus();
  }
}
