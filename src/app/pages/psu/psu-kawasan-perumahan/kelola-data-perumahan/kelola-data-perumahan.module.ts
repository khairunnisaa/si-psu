import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {KelolaDataPerumahanRoutingModule, routedComponents} from "./kelola-data-perumahan-routing.module";

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    KelolaDataPerumahanRoutingModule,
  ],
})
export class KelolaDataPerumahanModule { }
