// import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
// import {NbLoginComponent} from "@nebular/auth";
// import {AuthService} from '../../@core/mock/auth.service';
// import {TokenStorageService} from '../../@core/mock/token-storage.service';
// import {Router} from '@angular/router';
// import {TableAuth} from '../../@core/data/auth';
//
// @Component({
//   selector: 'ngx-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent extends NbLoginComponent implements OnInit {
//   form: any = {};
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   constructor(private authService: TableAuth, private tokenStorage: TokenStorageService,
//               options: {}, cd: ChangeDetectorRef, router: Router) {
//     super(authService , options , cd , router );
//   }
//
//   ngOnInit() {
//     this.options = {};
//     this.router;
//     this.cd;
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//     }
//   }
//
//   onSubmit() {
//     this.authService.login(this.form).subscribe(
//         data => {
//           this.tokenStorage.saveToken(data.accessToken);
//           this.tokenStorage.saveUser(data);
//
//           this.isLoginFailed = false;
//           this.isLoggedIn = true;
//           this.roles = this.tokenStorage.getUser().roles;
//           this.reloadPage();
//         },
//         err => {
//           this.errorMessage = err.error.message;
//           this.isLoginFailed = true;
//         },
//     );
//   }
//
//   reloadPage() {
//     window.location.reload();
//   }
// }
