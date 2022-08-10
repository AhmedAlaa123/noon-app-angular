import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { ILoginUser } from 'src/interfaces/AuthInterfaces/ILoginUser';
import { IRegisterUser } from 'src/interfaces/AuthInterfaces/IRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string='https://localhost:5200/api/Account/'
  constructor(private httpClinet:HttpClient) { }

  public Login(userLogin:ILoginUser):Observable<any>{
      return this.httpClinet.post(`${this.baseUrl}SignIn`,userLogin);
  }

  public Register(userRegsiter:IRegisterUser):Observable<any>{
      return this.httpClinet.post(`${this.baseUrl}Register` , userRegsiter);
  }
  // public GetAllusers():Observable<any>{
  //  var token localStorage.getItem(TokenEnum.Token);
  //   return this.httpClinet.get(`${this.baseUrl}users` ,{
  //     headers:[{`Bearer  ${token}`}]
  //   });
  // }

}
