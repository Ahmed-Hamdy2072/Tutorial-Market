import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategories } from 'src/app/Models/i-categories';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addForm!: FormGroup
  Catergories: ICategories[] = []
  file: any
  base64: any
  constructor(private prdservice: ProductsServiceService, private fb: FormBuilder) {

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
      ID: ["", Validators.required],
      Image: ["", Validators.required]

    })
  }
  Submit() {

    const Model = {
      title: this.addForm.value.Title,
      category: this.addForm.value.Category,
      description: this.addForm.value.Description,
      price: this.addForm.value.Price,
      image: this.base64,
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
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.addForm.get("Image")?.setValue(this.base64)


    }

  }
}
