import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';

import { CartsModule } from './carts/carts.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { AdminComponent } from './admin/admin.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AdminComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    ProductsModule,
    ReactiveFormsModule,








  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
