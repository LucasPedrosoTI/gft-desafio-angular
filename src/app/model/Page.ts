export class Page {
  startItem: number = 1;
  endItem: number = 5;
  totalItems: number = 0;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [];

  public loadItemsPerPageOptions() {
    for (
      let i = this.itemsPerPage;
      this.totalItems > 100 ? i <= 100 : i <= this.totalItems;
      i += this.itemsPerPage
    ) {
      this.itemsPerPageOptions.push(i);
    }
  }
}
