import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/Models/i-cart';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ICart[] = []
  Exist: boolean = true
  total: number = 0
  constructor() {

  }
  ngOnInit(): void {
    this.getCartPrd()


  }
  getCartPrd() {
    if ("cart" in localStorage) {
      this.Exist = false
      this.cart = JSON.parse(localStorage.getItem("cart")!)
      this.getTotal()

    } else {
      this.Exist = true
      this.cart = []
    }

  }
  deductAmount(index: number) {
    this.cart[index].quantity--
    this.getTotal()

    localStorage.setItem("cart", JSON.stringify(this.cart))

  }
  addAmount(index: number) {
    this.cart[index].quantity++
    this.getTotal()
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
  detectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

  getTotal() {
    for (let i in this.cart) {
      this.total += this.cart[i].item.price * this.cart[i].quantity
    }
  }
  delPrd(index: number) {
    this.cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.cart))
  }

}







