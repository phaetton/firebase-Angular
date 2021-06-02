import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  mentorado: any = null;
  private isEmail = '/\S+@\S+\.\S+/';

  mentoradosForm = new FormGroup({
    email: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', [Validators.required, Validators.pattern(this.isEmail)]),
    fechanac: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.mentorado = navigation?.extras?.state;
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
