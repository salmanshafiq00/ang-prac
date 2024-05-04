import { Component, ComponentRef, OnInit, ViewContainerRef, inject } from '@angular/core';
import { Product } from '../../models/Product.model';
import { ProductStaticDataService } from '../../services/product-static-data.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ConfirmationService } from '../../services/confirmation.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ConfirmationService]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  showConfirmationModal = false;
  productToDelete: Product;
  productListService: ProductStaticDataService = inject(ProductStaticDataService);
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  componentRef: ComponentRef<ConfirmationComponent>;
  confirmationService: ConfirmationService = inject(ConfirmationService);
  
  ngOnInit(): void {
    this.products = this.productListService.products;
  }


  deleteProduct(product: Product) {
    this.productToDelete = product;
    this.showConfirmation(product)

  }

  responseFromConfirmationModal(event: boolean) {
    if (event) {
      const productIndex = this.products.indexOf(this.productToDelete);
      if (productIndex !== -1) {
        this.products.splice(productIndex, 1);
      }
    }
    this.confirmationService.closeConfirmation();
  }

  editProduct(product: Product) {

  }

  // showConfirmation(product: Product) {
  //   this.componentRef = this.viewContainerRef.createComponent(ConfirmationComponent);
  //   this.componentRef.instance.showConfirmation('Confirmation', '');
  //   const confirmationSubscription = this.componentRef.instance.onConfirmation.subscribe((value) => {
  //     this.responseFromConfirmationModal(value);
  //     console.log(value);
  //   });

  //   confirmationSubscription.add(() => {
  //     confirmationSubscription.unsubscribe();
  //     this.componentRef.destroy();
  //   });
  // }

  showConfirmation(product: Product) {
    const confirmationSubscription = this.confirmationService.showConfirmation('Confirmation', `Are you sure you want to delete ${product.name}?`).subscribe((isConfirm) => {
      if(isConfirm){
        this.responseFromConfirmationModal(isConfirm);
      }
    });

    confirmationSubscription.add(() => {
      confirmationSubscription.unsubscribe();
      this.componentRef.destroy();
    });

  }

  // closeConfirmation() {
  //   this.componentRef.instance.closeConfirmation();
  // }
}

