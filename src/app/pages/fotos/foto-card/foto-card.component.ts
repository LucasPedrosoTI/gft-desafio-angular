import { Component, Input } from '@angular/core';
import { Foto } from 'src/app/model/Foto';

@Component({
  selector: 'app-foto-card',
  templateUrl: './foto-card.component.html',
})
export class FotoCardComponent {
  @Input('foto') foto: Foto = new Foto();
}
