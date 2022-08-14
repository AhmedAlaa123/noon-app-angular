import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/Services/AuthService/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IUser } from 'src/interfaces/AuthInterfaces/IUser';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss']
})
export class AllusersComponent implements OnInit {
  UserList:IUser[]=[];

  constructor(private authService: AuthService , private activeroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.authService.GetAllusers().subscribe(users=>{this.UserList=users});

  }

}
