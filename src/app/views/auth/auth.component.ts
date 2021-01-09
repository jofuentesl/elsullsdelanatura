import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  exportAs: 'authForm'
})
export class AuthComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  ngOnInit(): void {
  }

}
