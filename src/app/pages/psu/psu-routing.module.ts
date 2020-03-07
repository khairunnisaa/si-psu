import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsuComponent } from './psu.component';
import { PsuBerandaComponent } from './psu-beranda/psu-beranda.component';

const routes: Routes = [{
  path: '',
  component: PsuComponent,
  children: [
    {
      path: 'psu-beranda',
      component: PsuBerandaComponent,
    },
    // INGAT KALAU PUNYA ANAK SUB MENU TIDAK USAH DIBUAT ROUTING
    // {
    //   path: 'psu-pertamanan',
    //   component: PsuPertamananComponent,
    // },
    // {
    //   path: 'psu-kawasan-permukiman',
    //   component: PsuKawasanPermukimanComponent,
    // },
    // {
    //   path: 'psu-kawasan-perumahan',
    //   component: PsuKawasanPerumahanComponent,
    // },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PsuRoutingModule { }

export const routedComponents = [
   PsuComponent,
  // PsuPertamananComponent,
  // PsuKawasanPermukimanComponent,
  // PsuKawasanPerumahanComponent,
  PsuBerandaComponent,
  ];
