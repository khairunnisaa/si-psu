import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PsuPertamananComponent} from './psu-pertamanan.component';
import {KelolaDataPertamananComponent} from './kelola-data-pertamanan/kelola-data-pertamanan.component';
import {InputDataPertamananComponent} from "./input-data-pertamanan/input-data-pertamanan.component";

const routes: Routes = [{
  path: '',
  component: PsuPertamananComponent,
  children: [
    {
      path: 'kelola-data-pertamanan',
      component: KelolaDataPertamananComponent,
    },
    {
      path: 'input-data-pertamanan',
      component: InputDataPertamananComponent,
    },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class PsuPertamananRoutingModule { }

export const routedComponents = [
  PsuPertamananComponent,
  KelolaDataPertamananComponent,
  InputDataPertamananComponent,
];
