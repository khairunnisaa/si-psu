import { NgModule } from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';


import { KelolaDataPermukimanComponent } from './kelola-data-permukiman/kelola-data-permukiman.component';
import { PsuKawasanPermukimanRoutingModule, routedComponents} from './psu-kawasan-permukiman-routing.module';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman.component';
import { DetailPermukimanComponent } from './detail-permukiman/detail-permukiman.component';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPermukimanComponent,
    PsuKawasanPermukimanComponent,
    DetailPermukimanComponent,

  ],
  imports: [
    PsuKawasanPermukimanRoutingModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [
    DetailPermukimanComponent,
  ],
})
export class PsuKawasanPermukimanModule { }
