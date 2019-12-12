import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appInfo:any;
  constructor(private appService:AppService,private authService:AuthenticationService) { }

  ngOnInit() {
    this.appService.getJSON().subscribe((data)=>{
      this.appInfo = data;
    })
  }



}
