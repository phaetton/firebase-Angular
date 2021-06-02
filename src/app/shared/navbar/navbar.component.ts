import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private authSvc: AuthService,private router:Router) { }

  async ngOnInit() {
    console.log('navbar');
    this.user = await this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogget=true;
    }
  }

  async onLogout(){
    console.log("has salido del sistema");
    await this.authSvc.logout();
    this.router.navigate(['/login']);
  }

}
