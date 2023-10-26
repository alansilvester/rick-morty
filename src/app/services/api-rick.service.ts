import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiRickService {
  constructor(private http: HttpClient) { }

  getAllData(url: any): Observable<any> {
    return this.http.get<any>(url);
  }

  getByName(url: any, name: string): Observable<any> {
    return this.http.get<any>(url + "?name=" + name);
  }

  getByEpisode(url: any): Observable<any> {
    return this.http.get<any>(url);
  }
}
