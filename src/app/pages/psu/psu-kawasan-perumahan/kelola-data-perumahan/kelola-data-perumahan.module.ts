import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {PopUpDataPerumahanComponent} from "../pop-up-data-perumahan/pop-up-data-perumahan.component";
import {KelolaDataPerumahanRoutingModule, routedComponents} from "./kelola-data-perumahan-routing.module";

@NgModule({
  declarations: [
    ...routedComponents,
    PopUpDataPerumahanComponent,
  ],
  imports: [
    KelolaDataPerumahanRoutingModule,
  ],
})
export class KelolaDataPerumahanModule { }
