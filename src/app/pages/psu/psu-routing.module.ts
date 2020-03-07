import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsuComponent } from './psu.component';
import {BerandaComponent} from './beranda/beranda.component';
import { PsuBerandaComponent } from './psu-beranda/psu-beranda.component';

const routes: Routes = [{
  path: '',
  component: PsuComponent,
  children: [
    {
      path: 'beranda',
      component: BerandaComponent,
    },
    {
      path : 'psu-kawasan-permukiman',
      loadChildren: () => import('./psu-kawasan-permukiman/psu-kawasan-permukiman.module')
      .then(m => m.PsuKawasanPermukimanModule),
    },
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
