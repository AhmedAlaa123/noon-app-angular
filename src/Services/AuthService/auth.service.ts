import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenEnum } from 'src/Enums/AuthEnums/AuthEnums';
import { ILoginUser } from 'src/interfaces/AuthInterfaces/ILoginUser';
import { IRegisterUser } from 'src/interfaces/AuthInterfaces/IRegister';
import { IUser } from 'src/interfaces/AuthInterfaces/IUser';
import { IUserRole } from 'src/interfaces/AuthInterfaces/IUserRole';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged:BehaviorSubject<boolean>;
  baseUrl:string='https://localhost:5200/api/Account/'

  constructor(private httpClinet:HttpClient) {
    this.isLogged=new BehaviorSubject<boolean>(localStorage.getItem(TokenEnum.Token)?true:false);
   }

  public Login(userLogin:ILoginUser):Observable<any>{
      return this.httpClinet.post(`${this.baseUrl}SignIn`,userLogin);
  }


  public LogOut()
  {
    localStorage.removeItem(TokenEnum.Token);
    localStorage.removeItem(TokenEnum.Expiration);
    this.isLogged.next(false)
  }

  public Register(userRegsiter:IRegisterUser):Observable<any>{
      return this.httpClinet.post(`${this.baseUrl}Register` , userRegsiter);
  }
  public GetAllusers():Observable<IUser[]>{
    return this.httpClinet.get<IUser[]>(`${this.baseUrl}users` ,{
      headers:this.Header
    });
  }
  public AddRoleToUser(userRole:IUserRole):Observable<any>{
    return this.httpClinet.post(`${this.baseUrl}addRole`,userRole,{headers:this.Header});
  }

  public RemoveRoleFromUser(userRole:IUserRole):Observable<any>{
     return this.httpClinet.delete<any>(`${this.baseUrl}removeRole`,{
      headers:this.Header,
      body:userRole
     })
  }
 

private  get Header (){
    var token =localStorage.getItem(TokenEnum.Token);
   return new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': `Bearer ${token}`
   });
  }

}
