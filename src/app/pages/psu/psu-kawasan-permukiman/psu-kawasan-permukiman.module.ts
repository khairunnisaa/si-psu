import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaDataPermukimanComponent } from './kelola-data-permukiman/kelola-data-permukiman.component';
import { PsuKawasanPermukimanRoutingModule, routedComponents} from './psu-kawasan-permukiman-routing.module';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPermukimanComponent,

  ],
  imports: [
    CommonModule,
    PsuKawasanPermukimanRoutingModule,
  ],
})
export class PsuKawasanPermukimanModule { }
