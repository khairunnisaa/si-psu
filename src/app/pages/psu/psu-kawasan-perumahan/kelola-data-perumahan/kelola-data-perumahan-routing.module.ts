import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {KelolaDataPerumahanComponent} from "./kelola-data-perumahan.component";


const routes: Routes = [{
  path: 'kelola-data-perumahan',
  component: KelolaDataPerumahanComponent,
  children: [
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
];
