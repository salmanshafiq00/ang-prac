import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../../services/product-detail.service';
import { Product } from '../../models/Product.model';
import { ProductStaticDataService } from '../../services/product-static-data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productDetailService: ProductDetailService = inject(ProductDetailService);
  private productStaticDataService: ProductStaticDataService = inject(ProductStaticDataService);

  navigateToAbout() {
    // this.router.navigate(['about'], {relativeTo: this.activatedRoute});
    this.router.navigateByUrl('about', { skipLocationChange: true });
    // this.router.navigate(['about'], {relativeTo: this.activatedRoute})
  }

  gotoFooterSection() {
    this.router.navigate([], { fragment: 'footer-section' });
    const element = document.getElementById('footer-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((query) => {
      const searchValue = query.get('search');
      this.getProductList(searchValue);
    });
  }

  productListForDisplay: Product[];

  getProductList(searchText: string = '') {
    if (searchText) {
      this.productListForDisplay = this.productStaticDataService.products.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      this.productListForDisplay = [...this.productStaticDataService.products];
    }
  }


  getProductDetails(product: Product) {
    // this.productDetailService.setProductDetail(product);
    this.productDetailService.setProductList(this.productStaticDataService.products);
    this.router.navigateByUrl(`/product-detail/${product.id}`);
  }


}
