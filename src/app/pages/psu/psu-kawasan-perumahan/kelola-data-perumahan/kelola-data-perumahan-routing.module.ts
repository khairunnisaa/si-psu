import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PopupPerumahanComponent} from "./popup-perumahan/popup-perumahan.component";
import {KelolaDataPerumahanComponent} from "./kelola-data-perumahan.component";


const routes: Routes = [{
  path: 'kelola-data-perumahan',
  component: KelolaDataPerumahanComponent,
  children: [
    {
      path: 'popup-perumahan',
      component: PopupPerumahanComponent,
    },
  ],
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class KelolaDataPerumahanRoutingModule { }

export const routedComponents = [
  PopupPerumahanComponent,
];
