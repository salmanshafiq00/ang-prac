import { Component, inject } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailService } from '../../services/product-detail.service';
import { ProductStaticDataService } from '../../services/product-static-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
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

  navigateToCheckout(product: Product){
    this.router.navigate(['checkout'], {relativeTo: this.activatedRoute});
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
      this.productListForDisplay = this.productStaticDataService.products
        .filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      this.productListForDisplay = [...this.productStaticDataService.products];
    }
  }


  getProductDetails(product: Product) {
    console.log('navigating check')
    // this.productDetailService.setProductDetail(product);
    this.productDetailService.setProductList(this.productStaticDataService.products);
    // this.router.navigateByUrl(`/products/product-detail/${product.id}`);
    this.router.navigate(['product-detail', product.id], {relativeTo: this.activatedRoute});
  }


}
