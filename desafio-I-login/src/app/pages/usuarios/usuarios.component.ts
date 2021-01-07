import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { LoginService } from 'src/app/service/login.service';
import { ApiService } from 'src/app/service/api.service';
import { Page } from 'src/app/model/Page';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private apiService: ApiService
  ) {}

  public usuarios: Usuario[] = [];
  public usuariosFiltrados: Usuario[] = [];
  public page: Page = new Page();

  dataChangedHandler(data: Usuario[]): void {
    this.usuariosFiltrados = data;
  }

  ngOnInit(): void {
    this.loginService.redirectIfNotLoggedIn();

    this.apiService.obterUsuarios().subscribe(
      (usuarios) => {
        this.page.totalItems = usuarios.length;
        this.page.loadItemsPerPageOptions();

        this.usuarios = usuarios;
        this.usuariosFiltrados = usuarios.slice(
          this.page.startItem - 1,
          this.page.endItem
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
