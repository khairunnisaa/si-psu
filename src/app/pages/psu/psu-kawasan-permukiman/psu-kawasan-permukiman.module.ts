import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaDataPermukimanComponent } from './kelola-data-permukiman/kelola-data-permukiman.component';
import { PsuKawasanPermukimanRoutingModule, routedComponents} from './psu-kawasan-permukiman-routing.module';
import { PsuKawasanPermukimanComponent } from './psu-kawasan-permukiman.component';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPermukimanComponent,
    PsuKawasanPermukimanComponent,

  ],
  imports: [
    CommonModule,
    PsuKawasanPermukimanRoutingModule,
  ],
})
export class PsuKawasanPermukimanModule { }
