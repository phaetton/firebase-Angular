import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { ReactiveFormsModule  } from "@angular/forms";

import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from 'src/environments/environment';
import { MentoradoFormModule } from './shared/components/mentorado-form/mentorado-form.module';

import { AngularFireModule } from "@angular/fire";
import {AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    MentoradoFormModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
