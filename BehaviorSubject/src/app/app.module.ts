import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomPillsDirective } from './directives/custom-pills.directive';
import { CardHighlightDirective } from './directives/card-highlight.directive';
import { HighlightedDirective } from './directives/highlighted.directive';
import { DisabledProductDirective } from './directives/disabled-product.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SearchProductComponent,
    ProductDetailComponent,
    CustomPillsDirective,
    CardHighlightDirective,
    HighlightedDirective,
    DisabledProductDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
