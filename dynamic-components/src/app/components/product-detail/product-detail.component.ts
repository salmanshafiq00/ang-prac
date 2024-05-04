import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../../services/product-detail.service';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private productService: ProductDetailService = inject(ProductDetailService);

  private productId: number;
  selectedProduct: Product = new Product();
  productList: Product[];

  ngOnInit() {
    //this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
    //this.productId = +this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = +params.get('id');

      this.loadProducts();

      this.selectedProduct = this.productList?.find(product => product.id === this.productId);
    });
  }

  // private loadProducts(){
  //   this.productService.productDetail.subscribe((product) => {
  //     this.selectedProduct = product;
  //   });
  // }

  private loadProducts() {
    this.productService.productList.subscribe((products) => {
      if (products != null && products.length > 0) {
        this.productList = [...products];
      }
    });
  }


}
