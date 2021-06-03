import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MentoradosService } from 'src/app/pages/mentorados/mentorados.service';
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
    apellido: new FormControl('', Validators.required),
    fechanac: new FormControl('', Validators.required)
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mentoradosSvc: MentoradosService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.mentorado = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.mentorado === 'undefined') {
      //redirect to
      alert('Usted Agregará un nuevo Cliente');
      this.router.navigate(['new']);
    } else {
      this.mentoradosForm.patchValue(this.mentorado);
    }
  }

  onSave(): void {
    console.log('Guardando', this.mentoradosForm.value);
    if (this.mentoradosForm.valid) {
      const mentorado = this.mentoradosForm.value;
      this.mentoradosSvc.onSaveMentorado(mentorado);
      this.mentoradosForm.reset();
    }
  }

  onGoBackList(): void {
    this.router.navigate(['list']);
  }
}
