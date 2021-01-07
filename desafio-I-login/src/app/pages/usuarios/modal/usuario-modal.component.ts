import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-usuario-modal',
  templateUrl: './usuario-modal.component.html',
  styles: [],
})
export class UsuarioModalComponent {
  constructor(public modal: NgbActiveModal) {}

  @Input('usuario')
  public usuario: Usuario = new Usuario();
}
