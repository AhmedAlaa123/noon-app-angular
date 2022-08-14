import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';
import { SupcategoryServiceService } from 'src/Services/Supcategory/supcategory-service.service';

@Component({
  selector: 'app-supcategories',
  templateUrl: './supcategories.component.html',
  styleUrls: ['./supcategories.component.scss']
})
export class SupcategoriesComponent implements OnInit {

  constructor(private service:SupcategoryServiceService , private router:Router) { }

SupCtegories:ISupCategory[]=[];

  ngOnInit(): void {
    this.service.getsupcategories().subscribe(supdata=>{
      this.SupCtegories=supdata;
    })
    
  }
  details(id:any)
  {
    this.router.navigate(['/sup',id])
  }
  update(item:any)
  {
    this.router.navigate(['/update',item])
  }
  gotocreate()
  {
    this.router.navigate(['/create'])
  }
  delete(id:any)
  {
    if (confirm("هل انت متأكد من هذة العملية؟")) {
      return this.service.delete(id).subscribe(response=>{
        this.router.navigateByUrl('/dashboard');
      })
    }
    return null;
  }
}
