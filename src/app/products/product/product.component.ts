import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data: any = []
  @Output() item = new EventEmitter()
  Quantity: number = 1
  constructor() {


  }
  addToCart() {

    this.item.emit({ item: this.data, quantity: this.Quantity })


  }
}
