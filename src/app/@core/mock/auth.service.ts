// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import {NbAuthService, NbTokenService } from '@nebular/auth';
// import {TableAuth} from '../data/auth';
//
// const AUTH_API = 'http://localhost:7777/api/auth/';
//
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// };
//
// @Injectable()
// export class AuthService extends TableAuth {
//   constructor(private http: HttpClient, tokenService: NbTokenService, strategies: any ) {
//     super(tokenService, strategies);
//   }
//
//   login(credentials): Observable<any> {
//     return this.http.post(AUTH_API + 'signin', {
//       nik: credentials.nik,
//       password: credentials.password,
//     }, httpOptions);
//   }
//
//   register(user): Observable<any> {
//     return this.http.post(AUTH_API + 'signup', {
//       nik: user.nik,
//       password: user.password,
//     }, httpOptions);
//   }
// }
