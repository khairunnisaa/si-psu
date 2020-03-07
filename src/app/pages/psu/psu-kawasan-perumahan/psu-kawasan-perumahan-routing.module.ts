import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { KelolaDataPerumahan } from './kelola-data-perumahan/kelola-data-perumahan';

const routes: Routes = [{
  path: '',
  component: PsuKawasanPerumahanComponent,
  children: [
    {
      path: 'kelola-data-perumahan',
      component: KelolaDataPerumahan,
    },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class PsuKawasanPerumahanRoutingModule { }

export const routedComponents = [
  PsuKawasanPerumahanComponent,
  KelolaDataPerumahan,
];
