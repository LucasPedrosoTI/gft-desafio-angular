import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from 'src/app/model/Page';
import { Sort } from 'src/app/model/Sort';
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

  public sorting: Sort = new Sort();

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

  handleSorting(value: string) {
    const NOME = 'nome';
    const USERNAME = 'username';
    const EMAIL = 'e-mail';
    const DESC = 'desc';
    const ASC = 'asc';

    this.sorting.sortOrder = this.sorting.sortOrder === DESC ? ASC : DESC;

    if (value.toLocaleLowerCase() === NOME) {
      this.sortByName(NOME);
    } else if (value.toLocaleLowerCase() === USERNAME) {
      this.sortByUsername(USERNAME);
    } else {
      this.sortByEmail(EMAIL);
    }
  }

  private sortByEmail(EMAIL: string) {
    this.sorting.sortedBy = EMAIL;

    this.usuariosFiltrados = this.usuarios
      .sort((a, b) =>
        this.sorting.sortAlphabeticallyAscAndDes(
          this.sorting.sortOrder,
          a.email,
          b.email
        )
      )
      .slice(this.page.startItem - 1, this.page.endItem);
  }

  private sortByUsername(USERNAME: string) {
    this.sorting.sortedBy = USERNAME;

    this.usuariosFiltrados = this.usuarios
      .sort((a, b) =>
        this.sorting.sortAlphabeticallyAscAndDes(
          this.sorting.sortOrder,
          a.username,
          b.username
        )
      )
      .slice(this.page.startItem - 1, this.page.endItem);
  }

  private sortByName(NOME: string) {
    this.sorting.sortedBy = NOME;

    this.usuariosFiltrados = this.usuarios
      .sort((a, b) =>
        this.sorting.sortAlphabeticallyAscAndDes(
          this.sorting.sortOrder,
          a.name,
          b.name
        )
      )
      .slice(this.page.startItem - 1, this.page.endItem);
  }
}
