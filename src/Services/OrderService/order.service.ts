import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { environment } from 'src/environments/environment';
import { IOrder } from 'src/interfaces/OrderInterfaces/IOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orderUrl:string=`${environment.BaseUrl}order/`
  constructor(private httpClient:HttpClient) {

   }

   AddNewOrder(order:IOrder):Observable<any>
   {
      return this.httpClient.post(`${this.orderUrl}addnew`,order,{headers:this.Header})
   }

   private get Header(){
    const token=localStorage.getItem(TokenEnum.Token) as string
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'token':token,
      'Authorization': `Bearer ${token}`

    })
   }

}
