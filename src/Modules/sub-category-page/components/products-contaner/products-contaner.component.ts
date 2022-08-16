import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-contaner',
  templateUrl: './products-contaner.component.html',
  styleUrls: ['./products-contaner.component.scss']
})
export class ProductsContanerComponent implements OnInit {

  constructor() { }
@Input('Products')Products:any
  ngOnInit(): void {
  }

}
