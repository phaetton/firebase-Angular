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
  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('navbar');
    const user = await this.authSvc.getCurrentUser();
    if (user) {
      this.isLogget=true;
      console.log('user->', user);
    }
  }

}
