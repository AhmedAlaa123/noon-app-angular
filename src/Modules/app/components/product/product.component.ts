import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/Services/ProductService/product.service';
import { ICategory } from '../../../../interfaces/HomeInterfaces/ICategory';
import { ICompany } from '../../../../interfaces/ProductInterfaces/ICompany';
import { IProductAdd } from '../../../../interfaces/ProductInterfaces/IProductAdd';
import { IProductupdateordel } from '../../../../interfaces/ProductInterfaces/IProductUpdateorDel';
import { ISupCategory } from '../../../../interfaces/ProductInterfaces/ISupcategory';
// import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  Categories: ICategory[] = []
  SupCategories: ISupCategory[] = []
  Companies: any
  constructor(private productservice: ProductService, private fb: FormBuilder, private http: HttpClient, private productService: ProductService) {

    this.getCompanies();
    this.getCategories();
    this.getSupCategories();
  }

  productForm = this.fb.group({
    name: [''],
    price: [''],
    Description: [''],
    companyName: [''],
    categoryName: [''],
    supCategoryName: [''],
    productimage: [''],
    token: ['']
  })
  ngOnInit(): void {
  }
  getCompanies() {
    this.http.get('https://localhost:5200/api/Company/allCompanies').subscribe(data => this.Companies = data)
  }
  get productImage() {
    return this.productForm.get('productimage') ;
  }

  getSupCategories() {
    this.http.get<ISupCategory[]>('https://localhost:5200/api/SubCategory/getall').subscribe(data => this.SupCategories = data)
  }
  getCategories() {
    this.http.get<ICategory[]>('https://localhost:5200/api/Category/All').subscribe(data => this.Categories = data)
  }
  // product: IProductAdd = {
  //   name: '',
  //   price: '',
  //   productImages: {},
  //   description: '',
  //   companyName: '',
  //   supCategoryName: '',
  //   categoryName: '',
    
  // }
  get productName() {
    return this.productForm.get('name');
  }
  productList: IProductupdateordel[] = []
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.get('productimage')?.setValue(file);
    }
  }
  postData() {
    // this.product.name = this.productName?.value;
    // this.product.price = this.productForm.get('price')?.value;
    // this.product.description = this.productForm.get('description')?.value;
    // this.product.companyName = this.productForm.get('companyName')?.value;
    // this.product.categoryName = this.productForm.get('categoryName')?.value;
    // this.product.supCategoryName = this.productForm.get('supCategoryName')?.value;
    //   this.product.productImages=this.productImage?.value;


    // this.product.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJFYnJhaGVtIiwianRpIjoiZTAzNWQyMjUtYjYwYy00OWEyLWExMzgtYTgxMDYwODJmNDBjIiwiZW1haWwiOiJlZUBnbS5jb20iLCJyb2xlcyI6WyJVU0VSIiwiQWRtaW4iXSwiZXhwIjoxNjYwNjkzMzk5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo1MjAwLztodHRwczovL2xvY2FsaG9zdDo0NDAzOS8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAvIn0.mLWn40Zsmq_tnKwm5Kit0eqLxv3zVLQRBg6m7iGkVVk'
    const formData = new FormData();
    // formData.append('image', this.productForm.get('productimages')?.value);
    formData.append('productImage', this.productForm.get('productimage')?.value);
    formData.append('name', this.productForm.get('name')?.value);
    formData.append('Description', this.productForm.get('description')?.value);
    formData.append('CompanyName', this.productForm.get('companyName')?.value);
    formData.append('CategoryName', this.productForm.get('categoryName')?.value);
    formData.append('subCategoryName', this.productForm.get('subCategoryName')?.value);
    console.log(this.productForm.value)
    console.log(formData)
    this.productService.AddProduct(formData).subscribe(data => { console.log(data) })
  }
  getAllProducts() {
    this.productservice.getAll().subscribe(data => this.productList = data, err => console.log(err));
  }
  item: IProductAdd = {
    name: '',
    price: '',
    productImages: [''],
    description: '',
    companyName: '',
    supCategoryName: '',
    categoryName: '',
    token: ''
  }
  update(id: any) {
    this.item.name = this.productName?.value;
    this.item.price = this.productForm.get('price')?.value;
    this.item.description = this.productForm.get('description')?.value;
    this.item.companyName = this.productForm.get('companyName')?.value;
    this.item.categoryName = this.productForm.get('categoryName')?.value;
    this.item.supCategoryName = this.productForm.get('supCategoryName')?.value;
    this.productservice.updateProduct(id, this.item).subscribe(data => { console.log(data) }, err => console.log(err))
  }
  dalete(id: any) {
    this.productservice.deleteProduct(id).subscribe(data => { console.log(data) }, err => console.log(err))
  }
}
