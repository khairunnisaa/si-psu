import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:7777/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  getOperatorPemukimanContent(): Observable<any> {
    return this.http.get(API_URL + 'operator_pemukiman', { responseType: 'text' });
  }

  getOperatorPertamananBoard(): Observable<any> {
    return this.http.get(API_URL + 'operator_pertamanan', { responseType: 'text' });
  }

  getOperatorPerumahanBoard(): Observable<any> {
    return this.http.get(API_URL + 'operator_perumahan', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
