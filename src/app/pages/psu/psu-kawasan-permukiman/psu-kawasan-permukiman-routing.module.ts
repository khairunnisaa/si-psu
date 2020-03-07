import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PsuComponent} from "../psu.component";
import {BerandaComponent} from "../beranda/beranda.component";
import {PsuKawasanPermukimanComponent} from "./psu-kawasan-permukiman.component";


const routes: Routes = [{
  path: '',
  component: PsuKawasanPermukimanComponent,
  children: [
    {
      path: 'kelola-data',
      component: BerandaComponent,
    },
    // {
    //   path : 'psu-kawasan-permukiman',
    //   loadChildren: () => import('./psu-kawasan-permukiman/psu-kawasan-permukiman.module')
    //   .then(m => m.PsuKawasanPermukimanModule),
    // },
  ],
}];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PsuKawasanPermukimanRoutingModule { }

export const routedComponents = [
];
