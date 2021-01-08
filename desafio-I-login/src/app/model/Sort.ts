import { Usuario } from './Usuario';

export class Sort {
  sortedBy: string = '';
  sortOrder: string = 'desc';

  public sortAlphabeticallyAscAndDes(
    sortOrder: string,
    a: string,
    b: string
  ): number {
    return sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
  }

  private sortByEmail(
    sortOrder: string
  ): ((a: Usuario, b: Usuario) => number) | undefined {
    return sortOrder === 'asc'
      ? (a, b) => a.email.localeCompare(b.email)
      : (a, b) => b.email.localeCompare(a.email);
  }

  private sortByName(
    sortOrder: string
  ): ((a: Usuario, b: Usuario) => number) | undefined {
    return sortOrder === 'asc'
      ? (a, b) => a.name.localeCompare(b.name)
      : (a, b) => b.name.localeCompare(a.name);
  }
}
