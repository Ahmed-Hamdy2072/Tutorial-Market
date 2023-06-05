import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CartComponent } from './carts/cart/cart.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';


const routes: Routes = [
  { path: "products", component: AllProductsComponent },
  { path: "details/:pid", component: ProductDetailsComponent },
  { path: "Cart", component: CartComponent },
  { path: "home", component: HomeComponent },
  { path: "Login", component: LoginComponent },
  { path: "register", component: SignUpComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/Edit&Delete", component: EditProductsComponent },
  { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
