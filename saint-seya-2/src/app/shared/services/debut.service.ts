import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DebutService {

  api = environment.SS_API;

  constructor(private http: HttpClient) { }

  getDebuts() {
    return this.http.get<any>(`${this.api}/debuts`);
  }

  getDebut(id) {
    return this.http.get<any>(`${this.api}/debut/${id}`);
  }

}
