import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {PsuPertamananComponent} from './psu-pertamanan.component';
import {KelolaDataPertamananComponent} from './kelola-data-pertamanan/kelola-data-pertamanan.component';
import {InputDataPertamananComponent} from "./input-data-pertamanan/input-data-pertamanan.component";
import {DetailPertamananComponent} from "./detail-pertamanan/detail-pertamanan.component";
import {RekapitulasiPertamananComponent} from "./rekapitulasi-pertamanan/rekapitulasi-pertamanan.component";
import {MonitoringPertamananComponent} from "./monitoring-pertamanan/monitoring-pertamanan.component";

const routes: Routes = [{
  path: '',
  component: PsuPertamananComponent,
  children: [
    {
      path: 'kelola-data-pertamanan',
      component: KelolaDataPertamananComponent,
    },
    {
      path: 'input-data-pertamanan',
      component: InputDataPertamananComponent,
    },
    {
      path: 'detail-pertamanan',
      component: DetailPertamananComponent,
    },
    {
      path: 'rekapitulasi-pertamanan',
      component: RekapitulasiPertamananComponent,
    },
    {
      path: 'monitoring-pertamanan',
      component: MonitoringPertamananComponent,
    },
  ],
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})

export class PsuPertamananRoutingModule { }

export const routedComponents = [
  PsuPertamananComponent,
  KelolaDataPertamananComponent,
  InputDataPertamananComponent,
  DetailPertamananComponent,
  RekapitulasiPertamananComponent,
  MonitoringPertamananComponent,
];
