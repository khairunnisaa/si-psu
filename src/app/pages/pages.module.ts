import { NgModule } from '@angular/core';
import {NbCardModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BerandaComponent } from './beranda/beranda.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DetailBerandaComponent } from './detail-beranda/detail-beranda.component';
import { KegiatanFiskComponent } from './kegiatan-fisik/kegiatan-fisik.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    BerandaComponent,
    DetailBerandaComponent,
    KegiatanFiskComponent,
  ],
  entryComponents: [
    DetailBerandaComponent,

  ],
})
export class PagesModule {
}
