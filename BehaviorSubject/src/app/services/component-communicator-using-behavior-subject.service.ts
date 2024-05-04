import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicatorUsingBehaviorSubjectService {

  searchText: BehaviorSubject<string> = new BehaviorSubject('');

  getSearchValue(searchText: string){
    this.searchText.next(searchText);
  }
}
