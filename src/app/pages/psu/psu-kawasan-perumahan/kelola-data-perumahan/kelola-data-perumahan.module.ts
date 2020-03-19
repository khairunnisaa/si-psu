import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {KelolaDataPerumahanRoutingModule, routedComponents} from "./kelola-data-perumahan-routing.module";
import {NbCardModule} from "@nebular/theme";

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    KelolaDataPerumahanRoutingModule,
    NbCardModule,
  ],
})
export class KelolaDataPerumahanModule { }
