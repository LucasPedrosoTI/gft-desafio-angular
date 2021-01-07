import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { PaginationComponent } from './navigation/pagination/pagination.component';
import { FilterComponent } from './navigation/filter/filter.component';
import { FotoCardComponent } from './pages/fotos/foto-card/foto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    MenuComponent,
    FotosComponent,
    PaginationComponent,
    FilterComponent,
    FotoCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
