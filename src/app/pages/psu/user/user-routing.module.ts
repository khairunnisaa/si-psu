import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {KelolaDataUserComponent} from "./kelola-data-user/kelola-data-user.component";
import { UserComponent } from "./user.component";
import {InputDataUserComponent} from "./input-data-user/input-data-user.component";

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'kelola-data-user',
      component: KelolaDataUserComponent,
    },
    {
      path: 'input-data-user',
      component: InputDataUserComponent,
    },
  ],
},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class UserRoutingModule { }

export const routedComponents = [
  UserComponent,
  KelolaDataUserComponent,
  InputDataUserComponent,
  // PsuPertamananComponent,
  // PsuKawasanPermukimanComponent,
  // PsuKawasanPerumahanComponent,
];
