import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { first } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User | undefined;
  constructor(public afAuth: AngularFireAuth) {
  }

  async login(email: string, password: string) {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
  }

  async register(email: string, password: string) {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      //redirigir y vaciar local store
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
