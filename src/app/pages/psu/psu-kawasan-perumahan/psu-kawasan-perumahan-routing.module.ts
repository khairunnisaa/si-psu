import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { KelolaDataPerumahanComponent } from './kelola-data-perumahan/kelola-data-perumahan.component';

const routes: Routes = [{
  path: '',
  component: PsuKawasanPerumahanComponent,
  children: [
    {
      path: 'kelola-data-perumahan',
      component: KelolaDataPerumahanComponent,
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
  KelolaDataPerumahanComponent,
];
