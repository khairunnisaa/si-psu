import { NgModule } from '@angular/core';
import {NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
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
import {CommonModule} from "@angular/common";

import { KelolaDataPerumahanComponent } from './kelola-data-perumahan/kelola-data-perumahan.component';
import { PsuKawasanPerumahanRoutingModule, routedComponents } from './psu-kawasan-perumahan-routing.module';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan.component';
import { DetailPerumahanComponent } from './detail-perumahan/detail-perumahan.component';
import { InputDataPerumahanComponent } from './input-data-perumahan/input-data-perumahan.component';
import { RouterLinkPerumahanComponent } from './router-link-perumahan/router-link-perumahan.component';
import {ShowcaseDialogComponent} from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import {NewsService} from '../../layout/news.service';



@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPerumahanComponent,
    PsuKawasanPerumahanComponent,
    DetailPerumahanComponent,
    InputDataPerumahanComponent,
    RouterLinkPerumahanComponent,
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
  ],
  entryComponents: [
    DetailPerumahanComponent,
    RouterLinkPerumahanComponent,
  ],
})
export class PsuKawasanPerumahanModule { }
