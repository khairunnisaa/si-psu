import {NgModule} from '@angular/core';
import {PsuRoutingModule, routedComponents} from './psu-routing.module';
import {PsuComponent} from './psu.component';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman/psu-kawasan-permukiman.component';
import {BerandaComponent} from './beranda/beranda.component';
import {NbCardModule, NbTabsetModule} from "@nebular/theme";


@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    PsuKawasanPermukimanComponent,
    BerandaComponent,
  ],
  imports: [
    PsuRoutingModule,
    NbTabsetModule,
    NbCardModule,
  ],
})
export class PsuModule {
}
