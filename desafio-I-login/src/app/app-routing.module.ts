import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './pages/fotos/fotos.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'fotos', component: FotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
