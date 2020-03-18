import {NgModule} from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { AgmCoreModule} from '@agm/core';
import { MapsModule} from '../maps/maps.module';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { ChartModule } from 'angular2-chartjs';
import { NbCardModule, NbTabsetModule} from '@nebular/theme';

import { PsuRoutingModule, routedComponents} from './psu-routing.module';
import { PsuComponent} from './psu.component';
import { BerandaComponent} from './beranda/beranda.component';
import { RekapitulasiBarComponent} from './beranda/rekapitulasi-bar.component';
import {ChartsModule} from '../charts/charts.module';
import {RekapitulasiBarPermukimanComponent} from './beranda/rekapitulasi-bar-permukiman.component';


@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    BerandaComponent,
    RekapitulasiBarComponent,
    RekapitulasiBarPermukimanComponent,
    /*
        yang modul hanya punya submenu tidak usah dideklarasikan
     */
  ],
  imports: [
    PsuRoutingModule,
    NbTabsetModule,
    NbCardModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    AgmCoreModule,
    MapsModule,
    Ng2SmartTableModule,
    ChartsModule,
  ],
})
export class PsuModule {
}
