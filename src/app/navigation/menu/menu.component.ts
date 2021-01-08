import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  public isLogado: boolean = false;

  ngOnInit(): void {
    this.loginService.logado.subscribe((value) => (this.isLogado = value));
  }

  logout(): void {
    this.loginService.logout();
  }
}
