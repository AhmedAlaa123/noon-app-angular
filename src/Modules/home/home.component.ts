import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Products:any=[]
  constructor() { }
  ngOnInit(): void {
    window.fetch('../../../assets/Data/Products.json').then(response=>{
      response.json().then(data=>{
        this.Products=data.products
        console.log(this.Products)
      })
  })
}

}
