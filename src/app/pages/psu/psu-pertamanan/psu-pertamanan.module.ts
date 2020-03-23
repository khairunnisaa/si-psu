import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule,
  NbIconModule, NbDialogModule,
  NbInputModule, NbRadioModule, NbSelectModule,
  NbTreeGridModule, NbUserModule, NbWindowModule, NbTabsetModule,
} from '@nebular/theme';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KelolaDataPertamananComponent } from './kelola-data-pertamanan/kelola-data-pertamanan.component';
import { PsuPertamananRoutingModule, routedComponents} from './psu-pertamanan-routing.module';
import { PsuPertamananComponent } from './psu-pertamanan.component';
import { DetailPertamananComponent } from './detail-pertamanan/detail-pertamanan.component';
import { InputDataPertamananComponent } from './input-data-pertamanan/input-data-pertamanan.component';
import { RouterlinkDataPertamananComponent } from './routerlink-data-pertamanan/routerlink-data-pertamanan.component';
import { CommonModule} from "@angular/common";
import { PopupPertamananComponent } from './routerlink-data-pertamanan/popup-pertamanan.component';
import { RekapitulasiPertamananComponent } from './rekapitulasi-pertamanan/rekapitulasi-pertamanan.component';
import { MonitoringPertamananComponent } from './monitoring-pertamanan/monitoring-pertamanan.component';
import {ChartsModule} from '../../charts/charts.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';
import {MapsModule} from '../../maps/maps.module';
import {CameraPertamananComponent} from './camera-pertamanan/camera-pertamanan.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPertamananComponent,
    PsuPertamananComponent,
    DetailPertamananComponent,
    InputDataPertamananComponent,
    RouterlinkDataPertamananComponent,
    PopupPertamananComponent,
    RekapitulasiPertamananComponent,
    MonitoringPertamananComponent,
    CameraPertamananComponent,
  ],
  imports: [
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
    Ng2SmartTableModule,
    PsuPertamananRoutingModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    CommonModule,
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ChartModule,
    NgxEchartsModule,
    NgxChartsModule,
    NbTabsetModule,
    AgmCoreModule,
    MapsModule,
    WebcamModule,
  ],
  entryComponents: [
    RouterlinkDataPertamananComponent,
    PopupPertamananComponent,
  ],
})
export class PsuPertamananModule { }
