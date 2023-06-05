import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppRoutingModule } from '../app-routing.module';
import { EditProductsComponent } from './edit-products/edit-products.component';




@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    SelectComponent,
    AddProductComponent,
    EditProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule


  ]
  , exports: [
    AddProductComponent,
    ProductComponent,
    EditProductsComponent
  ]
})
export class ProductsModule { }
