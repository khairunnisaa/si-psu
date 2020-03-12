import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { KelolaDataPerumahanComponent } from './kelola-data-perumahan/kelola-data-perumahan.component';
import { DetailPerumahanComponent} from "./detail-perumahan/detail-perumahan.component";
import { InputDataPerumahanComponent} from "./input-data-perumahan/input-data-perumahan.component";

const routes: Routes = [{
  path: '',
  component: PsuKawasanPerumahanComponent,
  children: [
    {
      path: 'kelola-data-perumahan',
      component: KelolaDataPerumahanComponent,
    },
    {
      path: 'detail-data-perumahan',
      component: DetailPerumahanComponent,
    },
    {
      path: 'input-data-perumahan',
      component: InputDataPerumahanComponent,
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
  DetailPerumahanComponent,
  InputDataPerumahanComponent,
];
