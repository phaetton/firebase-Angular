import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value: any = null;
  private isEmail='/\S+@\S+\.\S+/';

  mentoradosForm = new FormGroup({
    email: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',[Validators.required,Validators.pattern(this.isEmail)]),
    fechanac: new FormControl('',Validators.required)
  })

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state!.value;
  }

  ngOnInit(): void {
   // this.initForm();
  }

  onSave():void {
    alert('Guardado con exito');
  }

/*   private initForm(): void {
    this.mentoradosForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      fechanac: ['', [Validators.required]],
    })
  } */

}
