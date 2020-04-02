import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule, NbTabsetModule,
  NbTreeGridModule,
  NbWindowModule,
  NbSpinnerModule, NbAlertModule,
} from '@nebular/theme';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";

import { KelolaDataPerumahanComponent } from './kelola-data-perumahan/kelola-data-perumahan.component';
import { PsuKawasanPerumahanRoutingModule, routedComponents } from './psu-kawasan-perumahan-routing.module';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { DetailPerumahanComponent } from './detail-perumahan/detail-perumahan.component';
import { InputDataPerumahanComponent } from './input-data-perumahan/input-data-perumahan.component';
import { RouterLinkPerumahanComponent } from './router-link-perumahan/router-link-perumahan.component';
import { RekapitulasiPerumahanComponent } from './rekapitulasi-perumahan/rekapitulasi-perumahan.component';
import { MonitoringPerumahanComponent } from './monitoring-perumahan/monitoring-perumahan.component';
import { PopupDataPerumahanComponent } from './router-link-perumahan/popup-data-perumahan.component';
import {ChartsModule} from '../../charts/charts.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AgmCoreModule} from '@agm/core';
import {MapsModule} from '../../maps/maps.module';
import {WebcamModule} from 'ngx-webcam';
import {CameraPerumahanComponent} from './camera-perumahan/camera-perumahan.component';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPerumahanComponent,
    PsuKawasanPerumahanComponent,
    DetailPerumahanComponent,
    InputDataPerumahanComponent,
    RouterLinkPerumahanComponent,
    RekapitulasiPerumahanComponent,
    MonitoringPerumahanComponent,
    PopupDataPerumahanComponent,
    CameraPerumahanComponent,
    ],
  imports: [
    PsuKawasanPerumahanRoutingModule,
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
    NbSpinnerModule,
    NbAlertModule,
  ],
  entryComponents: [
    RouterLinkPerumahanComponent,
    PopupDataPerumahanComponent,
  ],
})
export class PsuKawasanPerumahanModule { }
