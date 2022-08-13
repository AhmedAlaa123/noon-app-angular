import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/AuthService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogged:boolean=false;
  constructor(private authService:AuthService) {
    this.authService.isLogged.subscribe(status=>{this.islogged=status})
   }

  ngOnInit(): void {
  }

  LogOut(){
    this.authService.LogOut();
  }

}
