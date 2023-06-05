import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/Models/i-categories';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
  [x: string]: any;
  @Input() products: IProduct[] = []
  Catergories: ICategories[] = []
  prd = []
  editForm!: FormGroup
  base64: any
  constructor(private prdservice: ProductsServiceService, private router: Router, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCatergory()
    this.createForm()
  }

  getProducts() {

    this.prdservice.getAllProducts().subscribe((prd) => {
      this.products = prd;
    })
  }
  getCatergory() {
    this.prdservice.getCatergories().subscribe((cat: any) => {
      this.Catergories = cat;


    })
  }
  createForm() {
    this.editForm = this.fb.group({
      Title: ["", Validators.required],
      Category: ["", Validators.required],
      Description: ["", Validators.required],
      Price: ["", Validators.required],
      ID: ["", Validators.required],
      Image: ["", Validators.required]

    })
  }

  FilterCat(event: any) {
    let catValue = event.target.value;
    (catValue == "0") ? this.getProducts() : this.getPrdByCat(catValue)
  }
  getPrdByCat(cID: string) {
    this.prdservice.getPrdByCatID(cID).subscribe((prd) => {
      this.products = prd
    });
  }
  /*   DeletePrd(event: any) {
      this.prdservice.deleteProduct(event.id).subscribe()

    } */
  getImagePath(item: any) {
    const file = item.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(item);
    reader.onload = () => {
      this.base64 = reader.result;
      this.editForm.get("Image")?.setValue(this.base64)

    };
  }
  EditPrd(item: any) {

    this.editForm.patchValue({
      Title: item.title,
      Category: item.category,
      Description: item.description,
      Price: item.price,
      ID: item.id,
      Image: item.image
    })
    this.base64 = item.image

  }
  Submit() {
    const Model = {
      title: this.editForm.value.Title,
      category: this.editForm.value.Category,
      description: this.editForm.value.Description,
      price: this.editForm.value.Price,
      image: this.base64,
      id: this.editForm.value.ID
    }

    this.prdservice.editProduct(Model.id, Model).subscribe((res: any) => {
      alert("This Product added Successfuly")
      /*       window.history.back() */
    }), (err: Error) => {
      console.log(err)
    };
  }
  deletePrd(pid: number) {
    this.prdservice.deleteProduct(pid).subscribe(res => {
      alert("Product deleted Successfuly ")
    }), (error: Error) => {
      alert("Failed")
      console.error('There was an error!', error);
    }
  }


}
