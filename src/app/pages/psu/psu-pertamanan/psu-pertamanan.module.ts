import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaDataPertamananComponent } from './kelola-data-pertamanan/kelola-data-pertamanan.component';
import { PsuPertamananRoutingModule, routedComponents} from './psu-pertamanan-routing.module';
import { PsuPertamananComponent } from './psu-pertamanan.component';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataPertamananComponent,
    PsuPertamananComponent,
  ],
  imports: [
    CommonModule,
    PsuPertamananRoutingModule,
  ],
})
export class PsuPertamananModule { }
