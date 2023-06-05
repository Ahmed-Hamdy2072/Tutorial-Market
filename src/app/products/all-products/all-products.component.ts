import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/Models/i-cart';
import { ICategories } from 'src/app/Models/i-categories';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  @Input() products: IProduct[] = []
  Catergories: ICategories[] = []
  loading: boolean = false
  CartOfPrd: ICart[] = []

  constructor(private prdservice: ProductsServiceService, private router: Router) {

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCatergory()
  }

  getProducts() {
    this.loading = true
    this.prdservice.getAllProducts().subscribe((prd) => {
      this.products = prd;
      this.loading = false
    })
  }
  getCatergory() {
    this.loading = true
    this.prdservice.getCatergories().subscribe((cat: any) => {
      this.Catergories = cat;

      this.loading = false

    })
  }

  FilterCat(event: any) {
    let catValue = event.target.value;
    (catValue == "0") ? this.getProducts() : this.getPrdByCat(catValue)
  }
  getPrdByCat(cID: string) {
    this.loading = true
    this.prdservice.getPrdByCatID(cID).subscribe((prd) => {
      this.products = prd
      this.loading = false
    });
  }
  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.CartOfPrd = JSON.parse(localStorage.getItem("cart")!)
      let existItem = this.CartOfPrd.find(item => item.item.id == event.item.id)
      if (existItem) { alert("This product is already exist.") } else {
        this.CartOfPrd.push(event)
        localStorage.setItem("cart", JSON.stringify(this.CartOfPrd))
      }
    } else {
      this.CartOfPrd.push(event)
      localStorage.setItem("cart", JSON.stringify(this.CartOfPrd))
    }



  }





}




