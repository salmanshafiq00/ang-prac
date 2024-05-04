import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/HomeComponent';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { GuardService } from './guards/guard.service';
import { authGuard, canDeactivate, childAuthGuard } from './guards/guards';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products', canActivateChild: [childAuthGuard],  children: [
    {path: 'product-detail/:id', component: ProductDetailComponent},
    {path: 'checkout', component: CheckoutComponent}
  ]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => {return comp.canDeactivate()}]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

// const routes: Routes = [
//   {path: '', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'home', component: HomeComponent},
//   {path: 'products',  component: ProductsComponent, children: [
//     {path: 'product-detail/:id', component: ProductDetailComponent}
//   ]},
//   {path: 'about', component: AboutComponent},
//   {path: 'contact', component: ContactComponent},
//   {path: '**', component: NotFoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routesComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  NotFoundComponent,
  ProductDetailComponent,
  ProductSearchComponent,
  ProductsComponent,
  LoginComponent,
  CheckoutComponent,
  DashboardComponent
];


