import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicatorUsingSubjectService {

  // searchText property of EventEmitter is used to emit and subscribe data
  // searchText: EventEmitter<string> = new EventEmitter<string>(); 

  searchText: Subject<string> = new Subject();

  getSearchValue(searchValue: string){ 
    // this.searchText.emit(searchValue);
    this.searchText.next(searchValue);
  }

}
