import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  readonly apiURI = environment.apiURI;
  constructor(private http: HttpClient) { }

  getAppTest() {
    return this.http.get(this.apiURI + 'api/Values')
  }
}
