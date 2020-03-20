import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsuComponent } from './psu.component';
import { RekapitulasiComponent } from "./rekapitulasi/rekapitulasi.component";


const routes: Routes = [{
  path: '',
  component: PsuComponent,
  children: [
    {
      path: 'rekapitulasi',
      component: RekapitulasiComponent,
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
  RekapitulasiComponent,
  ];
