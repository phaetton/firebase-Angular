import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { MentoradoFormModule } from 'src/app/shared/components/mentorado-form/mentorado-form.module';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    MentoradoFormModule
  ]
})
export class NewModule { }
