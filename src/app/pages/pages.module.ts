import { NgModule } from '@angular/core';
import {NbCardModule, NbMenuModule, NbTabsetModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import {
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbWindowModule,
  NbButtonModule,
  NbAlertModule,
  NbCheckboxModule,
} from '@nebular/theme';


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BerandaComponent } from './beranda/beranda.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DetailBerandaComponent } from './detail-beranda/detail-beranda.component';
import { KegiatanFiskComponent } from './kegiatan-fisik/kegiatan-fisik.component';
import { RekapitulasiComponent } from './psu/rekapitulasi/rekapitulasi.component';
import { RekapitulasiBarComponent} from './psu/rekapitulasi/rekapitulasi-bar.component';
import { RekapitulasiBarPermukimanComponent} from './psu/rekapitulasi/rekapitulasi-bar-permukiman.component';

import { ChartsModule} from './charts/charts.module';
import { ChartModule } from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';
import {MapsModule} from './maps/maps.module';
import {RekapitulasiBarPertamananComponent} from './psu/rekapitulasi/rekapitulasi-bar-pertamanan.component';
import {RekapitulasiBarPerumahanComponent} from './psu/rekapitulasi/rekapitulasi-bar-perumahan.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule,
    ChartsModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbTabsetModule,
    NbCardModule,
    AgmCoreModule,
    MapsModule,
    NbDialogModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    NbWindowModule,
    NbButtonModule,
    NbAlertModule,
    FormsModule,
    NbCheckboxModule,
  ],
  declarations: [
    PagesComponent,
    BerandaComponent,
    DetailBerandaComponent,
    KegiatanFiskComponent,
    RekapitulasiComponent,
    RekapitulasiBarComponent,
    RekapitulasiBarPermukimanComponent,
    RekapitulasiBarPertamananComponent,
    RekapitulasiBarPerumahanComponent,
    LoginComponent,
  ],
  entryComponents: [
    DetailBerandaComponent,

  ],
})
export class PagesModule {
}
