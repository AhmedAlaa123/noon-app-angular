import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/interfaces/HomeInterfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  basUrl:string='https://localhost:5200/api/';
  constructor(private httpClient:HttpClient) {

   }
   
   GetAllCategories():Observable<ICategory[]>{
      return this.httpClient.get<ICategory[]>(`${this.basUrl}Category/All`);
   }
}
