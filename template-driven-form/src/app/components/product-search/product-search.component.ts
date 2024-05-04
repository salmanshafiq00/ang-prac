import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent {

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  searchText: string = '';

  search() {
    this.router.navigate(['/home'], { queryParams: { search: this.searchText } });
  }

}
