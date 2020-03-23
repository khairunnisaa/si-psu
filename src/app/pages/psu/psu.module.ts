import {NgModule} from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';

import { PsuRoutingModule, routedComponents} from './psu-routing.module';
import { PsuComponent} from './psu.component';





@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    /*
        yang modul hanya punya submenu tidak usah dideklarasikan
     */
  ],
  imports: [
    PsuRoutingModule,
    Ng2SmartTableModule,
  ],
})
export class PsuModule {
}
