import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  api = environment.SS_API;

  constructor(private http: HttpClient) { }

  // Cargar todos los personajes
  getAllCharacters() {
    return this.http.get<any>(`${this.api}/characters/`);
  }

  // getCuriosities() {
  //   return this.http.get(`${this.api}/curiosities`);
  // }

  findCharacterById(id: number) {
    return this.http.get<any>(`${this.api}/character/${id}`);
  }

}
