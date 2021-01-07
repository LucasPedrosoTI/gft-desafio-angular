import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  public logado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  redirectIfNotLoggedIn() {
    if (this.isNotLogado()) {
      this.logout();
    }
  }

  validateLoginAndRedirect(email: string, senha: string) {
    if (this.isValidLogin(email, senha)) {
      this.setLogado('true');
      this.redirectTo('/usuarios');
    }
  }

  public isLogado() {
    return localStorage.getItem('logado') === 'true';
  }

  public isNotLogado() {
    return localStorage.getItem('logado') !== 'true';
  }

  public logout() {
    this.setLogado('false');
    this.redirectTo('/');
  }

  private isValidLogin(email: string, senha: string): boolean {
    return email === 'admin@gft.com' && senha === '123456';
  }

  private redirectTo(route: string) {
    this.router.navigate([route]);
  }

  private setLogado(status: string) {
    localStorage.setItem('logado', status);
    this.logado.next(status === 'true');
  }
}
