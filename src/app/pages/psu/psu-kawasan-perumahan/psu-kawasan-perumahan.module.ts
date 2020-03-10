import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
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


import { KelolaDataPerumahanComponent } from './kelola-data-perumahan/kelola-data-perumahan.component';
import { PsuKawasanPerumahanRoutingModule, routedComponents } from './psu-kawasan-perumahan-routing.module';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { DetailPerumahanComponent } from './detail-perumahan/detail-perumahan.component';
import { InputDataPerumahanComponent } from './input-data-perumahan/input-data-perumahan.component';


@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPerumahanComponent,
    PsuKawasanPerumahanComponent,
    DetailPerumahanComponent,
    InputDataPerumahanComponent,
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
  ],
  entryComponents: [
    DetailPerumahanComponent,
    InputDataPerumahanComponent,
  ],
})
export class PsuKawasanPerumahanModule { }
