import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from '../model/Foto';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://jsonplaceholder.typicode.com';

  obterUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/users`);
  }

  obterFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.url}/photos`);
  }
}
