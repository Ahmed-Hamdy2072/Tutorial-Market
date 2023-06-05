import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { IProduct } from '../Models/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []
  Totalprice: number = 0
  constructor(private prdService: ProductsServiceService) {






  }
  ngOnInit(): void {
    this.prdService.getLimitedPrd().subscribe((res) => {
      this.products = res

    })
  }




}
