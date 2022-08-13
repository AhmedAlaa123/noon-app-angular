

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/AuthService/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged:boolean=false;
  constructor(private authService:AuthService,private route :Router){
    authService.isLogged.subscribe(data=>this.isLogged=data);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isLogged){
      return true;
    }
      else{
        alert('يجب عليك تسجيل الدخول')
        this.route.navigate(['/account/login'])
        return false;
      }
  }

}
