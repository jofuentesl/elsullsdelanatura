import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public afAuth: AngularFireAuth ) { }

  /*método para registrar usuario admin */

  async onRegister(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('Current user=>', user)
    })
    .catch((err) => {
      console.log( err.code, ' + ', err.message );
    })
  }
}
