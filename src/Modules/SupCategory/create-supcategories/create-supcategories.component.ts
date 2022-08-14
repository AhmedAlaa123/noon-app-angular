import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';

@Component({
  selector: 'app-create-supcategories',
  templateUrl: './create-supcategories.component.html',
  styleUrls: ['./create-supcategories.component.scss']
})
export class CreateSupcategoriesComponent implements OnInit {
  
  constructor(private service:SupcategoryServiceService,private route:Router) { }

  uploadForm!: FormGroup; 

  ngOnInit(): void {
    this.uploadForm=new  FormGroup({
      name:new FormControl(''),
      image:new FormControl(''),
  })}
  
  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('image')?.setValue(file);
    }
  }
 
  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image')?.value);
    formData.append('name', this.uploadForm.get('name')?.value);

    this.service.create(formData).subscribe(data=>{
      this.route.navigateByUrl('/dashboard/allsup');
    })
   
  }

}
