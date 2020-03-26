import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsuComponent } from './psu.component';



const routes: Routes = [{
  path: '',
  component: PsuComponent,
  children: [
  ],
},
];

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
  ];
