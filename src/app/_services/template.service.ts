import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private http: HttpClient
  ) { }

  fetchTemplate() {
    console.log('getting template from server')
    return this.http.get(`http://localhost:8080/api/auth/template`).subscribe();
  }
}
