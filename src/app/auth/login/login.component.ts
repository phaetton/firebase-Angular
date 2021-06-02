import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    const user= await this.authSvc.login(email, password);
    if (user){
      //redirigimos a homepage
      this.router.navigate(['/home']);
    }
  }

}
