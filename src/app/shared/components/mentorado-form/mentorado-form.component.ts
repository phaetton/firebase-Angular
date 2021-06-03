import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mentorado } from '../../models/mentorado.interface';

@Component({
  selector: 'app-mentorado-form',
  templateUrl: './mentorado-form.component.html',
  styleUrls: ['./mentorado-form.component.scss']
})
export class MentoradoFormComponent implements OnInit {

  mentorado: Mentorado;
  private isEmail = '/\S+@\S+\.\S+/';

  mentoradosForm = new FormGroup({
    email: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
    fechanac: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.mentorado = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.mentorado === 'undefined') {
      //redirect to
      alert('no existe el mentorado, lo redigiremos a crear uno');
      this.router.navigate(['new']);
    } else {
      this.mentoradosForm.patchValue(this.mentorado);
    }
  }

  onSave(): void {
    alert('Guardado con exito');
  }

  onGoBackList(): void {
    this.router.navigate(['list']);
  }
}
