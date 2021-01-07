import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  mySubscription: any;
  constructor(private loginService: LoginService) {}

  credentials = {
    email: '',
    senha: '',
  };

  invalidLogin!: boolean;
  needsToLogin!: boolean;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();

    if (this.loginService.isNotLogado()) {
      this.needsToLogin = true;
    }
  }

  onSubmit() {
    this.loginService.validateLoginAndRedirect(
      this.email?.value,
      this.senha?.value
    );
    this.invalidLogin = true;
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.credentials.email, [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl(this.credentials.senha, [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
