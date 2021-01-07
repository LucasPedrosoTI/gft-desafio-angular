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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModalComponent } from './pages/usuarios/modal/usuario-modal.component';
import { SpinnerComponent } from './navigation/spinner/spinner.component';
import { httpInterceptorProviders } from './http-interceptor';

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
    UsuarioModalComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
