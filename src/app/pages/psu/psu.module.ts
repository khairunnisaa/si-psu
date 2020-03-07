import {NgModule} from '@angular/core';
import { PsuRoutingModule, routedComponents} from './psu-routing.module';
import { PsuComponent } from './psu.component';
import { PsuBerandaComponent } from './psu-beranda/psu-beranda.component';



@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    PsuBerandaComponent,
    /*
        yang modul yang punya submenu tidak usah dideclarasikan
     */
  ],
  imports: [
    PsuRoutingModule,
  ],
})
export class PsuModule {
}
