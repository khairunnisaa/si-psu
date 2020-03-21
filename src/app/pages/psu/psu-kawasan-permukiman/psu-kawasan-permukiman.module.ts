import { NgModule } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbWindowModule,
} from '@nebular/theme';
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

import { KelolaDataPermukimanComponent } from './kelola-data-permukiman/kelola-data-permukiman.component';
import { PsuKawasanPermukimanRoutingModule, routedComponents} from './psu-kawasan-permukiman-routing.module';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman.component';
import { DetailPermukimanComponent } from './detail-permukiman/detail-permukiman.component';
import { InputDataPermukimanComponent } from './input-data-permukiman/input-data-permukiman.component';
import { RouterlinkKawasanPermukimanComponent } from './routerlink-kawasan-permukiman/routerlink-kawasan-permukiman.component';
import { RekapitulasiPermukimanComponent } from './rekapitulasi-permukiman/rekapitulasi-permukiman.component';
import { MonitoringPermukimanComponent } from './monitoring-permukiman/monitoring-permukiman.component';
import {PopupDataPermukimanComponent} from "./routerlink-kawasan-permukiman/popup-data-permukiman.component";


@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPermukimanComponent,
    PsuKawasanPermukimanComponent,
    DetailPermukimanComponent,
    InputDataPermukimanComponent,
    RouterlinkKawasanPermukimanComponent,
    RekapitulasiPermukimanComponent,
    MonitoringPermukimanComponent,
    PopupDataPermukimanComponent,

  ],
  imports: [
    PsuKawasanPermukimanRoutingModule,
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

  ],
  entryComponents: [
    RouterlinkKawasanPermukimanComponent,
    PopupDataPermukimanComponent,
  ],
})
export class PsuKawasanPermukimanModule { }
