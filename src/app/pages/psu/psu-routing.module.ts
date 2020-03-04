import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsuComponent } from './psu.component';
import { PetaSebaranComponent } from './peta-sebaran/peta-sebaran.component';

const routes: Routes = [{
  path: '',
  component: PsuComponent,
  children: [{
    path: 'peta-sebaran',
    component: PetaSebaranComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PsuRoutingModule { }

export const routedComponents = [
  PetaSebaranComponent,
  ];
