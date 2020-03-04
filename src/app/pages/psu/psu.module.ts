import {NgModule} from '@angular/core';
import {PsuRoutingModule, routedComponents} from './psu-routing.module';
import {PsuComponent} from './psu.component';
import { PsuKawasanPerumahanComponent } from './psu-kawasan-perumahan/psu-kawasan-perumahan.component';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman/psu-kawasan-permukiman.component';
import { PertamananComponent } from './pertamanan/pertamanan.component';


@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    PsuKawasanPerumahanComponent,
    PsuKawasanPermukimanComponent,
    PertamananComponent,
  ],
  imports: [
    PsuRoutingModule,
  ],
})
export class PsuModule {
}
