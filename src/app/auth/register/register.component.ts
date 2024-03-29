import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService} from './../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    console.log(this.registerForm.value);
    const {email,password}=this.registerForm.value;
    const user=await this.authSvc.register(email,password);
    if(user){
      //redirect
      this.router.navigate(['/home']);
    }
  }
}
