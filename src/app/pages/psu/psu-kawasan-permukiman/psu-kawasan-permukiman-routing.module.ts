import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PsuKawasanPermukimanComponent} from './psu-kawasan-permukiman.component';
import {KelolaDataPermukimanComponent} from './kelola-data-permukiman/kelola-data-permukiman.component';

const routes: Routes = [{
  path: '',
  component: PsuKawasanPermukimanComponent,
  children: [
    {
      path: 'kelola-data-permukiman',
      component: KelolaDataPermukimanComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class PsuKawasanPermukimanRoutingModule { }

export const routedComponents = [
  PsuKawasanPermukimanComponent,
  KelolaDataPermukimanComponent,
];
