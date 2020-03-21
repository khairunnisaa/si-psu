import { NgModule } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTooltipModule,
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
import { PopupDataPermukimanComponent } from './popup-data-permukiman/popup-data-permukiman.component';


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
    FormsModule,
    ReactiveFormsModule,
    NbTooltipModule,

  ],
  entryComponents: [
    RouterlinkKawasanPermukimanComponent,
  ],
})
export class PsuKawasanPermukimanModule { }
