import { NgModule } from '@angular/core';
import {
  NbActionsModule, NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule,
  NbIconModule, NbDialogModule,
  NbInputModule, NbRadioModule, NbSelectModule,
  NbTreeGridModule, NbUserModule, NbWindowModule,
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
  ],
  entryComponents: [
    RouterlinkDataPertamananComponent,
    PopupPertamananComponent,
  ],
})
export class PsuPertamananModule { }
