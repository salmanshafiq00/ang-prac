import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ProductSearchService {

    productSearchedValue: EventEmitter<string> = new EventEmitter<string>();

}