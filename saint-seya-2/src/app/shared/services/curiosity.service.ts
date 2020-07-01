import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuriosityService {

  api = environment.SS_API;

  constructor(private http: HttpClient) { }

  getCuriosities() {
    return this.http.get<any>(`${this.api}/curiosities`);
  }

}
