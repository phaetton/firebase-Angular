import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MentoradoFormComponent } from './mentorado-form.component';



@NgModule({
  declarations: [MentoradoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[MentoradoFormComponent]
})
export class MentoradoFormModule { }
