import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/model/Page';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [],
})
export class FilterComponent implements OnInit {
  constructor() {}

  @Input('data') data: Usuario[] = [];
  @Input('page') page: Page = new Page();
  @Output() dataChanged = new EventEmitter();

  ngOnInit(): void {}

  onKeyUp(filter: string): void {
    let updatedData = this.data
      .filter(
        (element) =>
          this.compareLowerCase(element.name, filter) ||
          this.compareLowerCase(element.username, filter) ||
          this.compareLowerCase(element.email, filter)
      )
      .slice(this.page.startItem - 1, this.page.endItem);

    this.dataChanged.emit(updatedData);
  }

  private compareLowerCase(string: string, otherString: string): boolean {
    return string.toLowerCase().includes(otherString.toLowerCase());
  }
}
