import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISupCategory } from 'src/interfaces/SupCategoryIntefaces/SupCategory';

@Injectable({
  providedIn: 'root'
})
export class SupcategoryServiceService {

  constructor(private http:HttpClient) { }
  //get all sup categories
  getsupcategories() :Observable<ISupCategory[]>
  {
    return this.http.get<ISupCategory[]>(`${environment.URL}getall`);
  }
  //show details for sup category
  details(id:any):Observable<ISupCategory>
  {
    return this.http.get<ISupCategory>(environment.URL+id);
  }
  //create sup category
  create(model:any):Observable<any>
  {
    return this.http.post<any>(environment.URL,model);
  }
  
  update(id:ISupCategory,item:any)
  {
    return this.http.put(environment.URL+id,item);
  }
  //Delete sup category
  delete(id:any)
  {
    return this.http.delete(environment.URL+id);
  }
}
