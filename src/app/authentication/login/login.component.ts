import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private router: Router
  ) { }

  loginForm = this._fb.group({
    username: '',
    password: '',
  });

  ngOnInit(): void {
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
      console.log(this.loginForm.value)
    }
  }


}
