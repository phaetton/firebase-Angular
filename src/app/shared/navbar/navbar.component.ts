import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
public isLogget=false;
public user:any;
  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('navbar');
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogget=true;
    }
  }

  onLogout(){
    console.log("estas saliendo del sistema");
  }

}
