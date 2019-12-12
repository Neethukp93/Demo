import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { APPLICATION_ROUTES } from 'src/app/shared/routes/application_routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userInfo:User;
  constructor(private authService:AuthenticationService,private router:Router) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user=>{
      this.userInfo = user;
    });
  }

  logout(){
    this.authService.logout();
    this.router.navigate([APPLICATION_ROUTES.ADMIN_LOGIN]);
  }

}
