import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  mySubscription: any;
  constructor(private loginService: LoginService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

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
