import {NgModule} from '@angular/core';
import {PsuRoutingModule, routedComponents} from './psu-routing.module';
import {PsuComponent} from './psu.component';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman/psu-kawasan-permukiman.component';
import {BerandaComponent} from './beranda/beranda.component';
import {NbCardModule, NbTabsetModule} from '@nebular/theme';
import { ChartModule } from 'angular2-chartjs';
import {BerandaPieComponent} from './beranda/beranda-pie.component';
import { NgxEchartsModule } from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';
import {MapsModule} from '../maps/maps.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { PsuBerandaComponent } from './psu-beranda/psu-beranda.component';



@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    PsuKawasanPermukimanComponent,
    BerandaComponent,
    BerandaPieComponent,
    PsuBerandaComponent,
    /*
        yang modul yang punya submenu tidak usah dideclarasikan
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
  ],
})
export class PsuModule {
}
