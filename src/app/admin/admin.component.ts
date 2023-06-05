import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../Services/products-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategories } from '../Models/i-categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addForm!: FormGroup
  Catergories: ICategories[] = []
  file: any
  constructor(private prdservice: ProductsServiceService, private fb: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.getCatergory()
    this.createForm()
  }
  getCatergory() {
    this.prdservice.getCatergories().subscribe((cat: any) => {
      this.Catergories = cat;
    })
  }
  createForm() {
    this.addForm = this.fb.group({
      Title: ["", Validators.required],
      Category: ["", Validators.required],
      Description: ["", Validators.required],
      Price: ["", Validators.required],
      ID: ["", Validators.required]

    })
  }
  Submit() {

    const Model = {
      title: this.addForm.value.Title,
      category: this.addForm.value.Category,
      description: this.addForm.value.Description,
      price: this.addForm.value.Price,
      image: this.file,
      id: this.addForm.value.ID
    }

    this.prdservice.addProduct(Model).subscribe((res: any) => {
      alert("This Product added Successfuly")
      /*       window.history.back() */
    }), (err: any) => {
      console.log(err)
    };


  }
  getimage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
    };
  }
}

