import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgForm } from '@angular/forms';
=======
import { AuthService } from '@services/auth.service'
>>>>>>> auth

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  exportAs: 'authForm'
})
export class AuthComponent implements OnInit {

  constructor( public AuthService: AuthService) { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  ngOnInit(): void {
  }

}
