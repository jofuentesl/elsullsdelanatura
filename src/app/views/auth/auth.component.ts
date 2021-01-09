import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  exportAs: 'authForm'
})
export class AuthComponent implements OnInit {

  constructor( public authService: AuthService ) { }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.onRegister(email, password);
    form.reset();
  }

  ngOnInit(): void {
  }

}
