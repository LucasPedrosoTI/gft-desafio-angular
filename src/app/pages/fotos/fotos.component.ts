import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/model/Foto';
import { Page } from 'src/app/model/Page';
import { ApiService } from 'src/app/service/api.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: [],
})
export class FotosComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private apiService: ApiService
  ) {}

  public fotos: Foto[] = [];
  public fotosFiltradas: Foto[] = [];
  public page: Page = new Page();

  dataChangedHandler(data: Foto[]): void {
    this.fotosFiltradas = data;
  }

  ngOnInit(): void {
    this.loginService.redirectIfNotLoggedIn();

    this.page.itemsPerPage = 6;
    this.page.endItem = 6;

    this.apiService.obterFotos().subscribe(
      (fotos) => {
        this.page.totalItems = fotos.length;
        this.page.loadItemsPerPageOptions();

        this.fotos = fotos;
        this.fotosFiltradas = fotos.slice(
          this.page.startItem - 1,
          this.page.endItem
        );
      },
      (error) => console.log(error)
    );
  }
}
