import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  api = environment.SS_API;

  constructor(private http: HttpClient) { }

  // Obtener nombre de todas las clases
  getClassNames() {
    return this.http.get<any>(`${this.api}/class-names`);
  }

  // Filtrar por nombre de clase
  getClassByName(className: string) {
    return this.http.get<any>(`${this.api}/${className}`);
  }

  // Cargar y mostrar todas las clases al iniciar
  getAllClasses() {
    return this.http.get<any>(`${this.api}/all-classes/`);
  }

}
