import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/model/Page';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Input('data') data: Array<any> = [];
  @Input('page') page: Page = new Page();

  @Output() dataChanged = new EventEmitter();

  ngOnInit(): void {}

  onChange(value: string): void {
    let itemsPerPage = parseInt(value);

    this.page.startItem - itemsPerPage <= 1
      ? (this.page.startItem = 1)
      : (this.page.startItem -= itemsPerPage);

    this.page.itemsPerPage = itemsPerPage;
    this.page.endItem = itemsPerPage;
    this.updateStartAndEndPage();
  }

  nextPage() {
    this.page.startItem += this.page.itemsPerPage;
    this.page.endItem += this.page.itemsPerPage;

    this.updateStartAndEndPage();
  }

  previousPage() {
    this.page.startItem -= this.page.itemsPerPage;
    this.page.endItem -= this.page.itemsPerPage;

    this.updateStartAndEndPage();
  }

  private updateStartAndEndPage() {
    let updatedData = this.data.slice(
      this.page.startItem - 1,
      this.page.endItem
    );

    this.dataChanged.emit(updatedData);
  }
}
