import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PsuKawasanPermukimanComponent} from './psu-kawasan-permukiman.component';
import {KelolaDataPermukimanComponent} from './kelola-data-permukiman/kelola-data-permukiman.component';
import {InputDataPermukimanComponent} from "./input-data-permukiman/input-data-permukiman.component";
import {DetailPermukimanComponent} from "./detail-permukiman/detail-permukiman.component";
import {MonitoringPermukimanComponent} from "./monitoring-permukiman/monitoring-permukiman.component";
import {RekapitulasiPermukimanComponent} from "./rekapitulasi-permukiman/rekapitulasi-permukiman.component";

const routes: Routes = [{
  path: '',
  component: PsuKawasanPermukimanComponent,
  children: [
    {
      path: 'kelola-data-permukiman',
      component: KelolaDataPermukimanComponent,
    },
    {
      path: 'input-data-permukiman',
      component: InputDataPermukimanComponent,
    },
    {
      path: 'detail-data-permukiman',
      component: DetailPermukimanComponent,
    },
    {
      path: 'rekapitulasi-permukiman',
      component: RekapitulasiPermukimanComponent,
    },
    {
      path: 'monitoring-permukiman',
      component: MonitoringPermukimanComponent,
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
  KelolaDataPermukimanComponent,
  InputDataPermukimanComponent,
  DetailPermukimanComponent,
];
