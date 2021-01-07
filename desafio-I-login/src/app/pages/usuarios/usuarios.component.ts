import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from 'src/app/model/Page';
import { Usuario } from 'src/app/model/Usuario';
import { ApiService } from 'src/app/service/api.service';
import { LoginService } from 'src/app/service/login.service';
import { UsuarioModalComponent } from './modal/usuario-modal.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private apiService: ApiService,
    private modalService: NgbModal
  ) {}

  public usuarios: Usuario[] = [];
  public usuariosFiltrados: Usuario[] = [];
  public page: Page = new Page();
  public usuario: Usuario = new Usuario();

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

  open(usuario: Usuario) {
    const modalRef = this.modalService.open(UsuarioModalComponent);
    modalRef.componentInstance.usuario = usuario;
  }
}
