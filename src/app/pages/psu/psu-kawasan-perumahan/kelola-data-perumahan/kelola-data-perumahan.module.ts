import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {PopUpDataPerumahanComponent} from "../pop-up-data-perumahan/pop-up-data-perumahan.component";
import {KelolaDataPerumahanRoutingModule, routedComponents} from "./kelola-data-perumahan-routing.module";
import {NbCardModule} from "@nebular/theme";

@NgModule({
  declarations: [
    ...routedComponents,
    PopUpDataPerumahanComponent,
  ],
  imports: [
    KelolaDataPerumahanRoutingModule,
    NbCardModule,
  ],
})
export class KelolaDataPerumahanModule { }
