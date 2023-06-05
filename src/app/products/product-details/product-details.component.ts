import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any
  prd: any = []
  CartOfPrd: any[] = []
  Quantity: number = 1
  prdQ = {}

  constructor(private route: ActivatedRoute, private prdservice: ProductsServiceService, private router: Router) {
    this.id = this.route.snapshot.paramMap.get("pid")
  }
  ngOnInit() {
    this.getPrdbyID()

  }
  getPrdbyID() {
    this.prdservice.getPrdByID(this.id).subscribe(res => {
      this.prd = res

    },)
  }
  goback() {
    window.history.back()
  }
  addToCart() {
    this.prdQ = { item: this.prd, quantity: this.Quantity }

    if ("cart" in localStorage) {
      this.CartOfPrd = JSON.parse(localStorage.getItem("cart")!)
      let existItem = this.CartOfPrd.find(item => item.item.id == this.id)
      if (existItem) { alert("This product is already exist.") } else {
        this.CartOfPrd.push(this.prdQ)
        localStorage.setItem("cart", JSON.stringify(this.CartOfPrd))
      }
    } else {
      this.CartOfPrd.push(this.prdQ)
      localStorage.setItem("cart", JSON.stringify(this.CartOfPrd))
    }
  }
}
