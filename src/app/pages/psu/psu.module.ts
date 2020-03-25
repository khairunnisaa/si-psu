import {NgModule} from '@angular/core';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule, NbTabsetModule,
  NbTreeGridModule,
  NbWindowModule,
} from '@nebular/theme';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { PsuRoutingModule, routedComponents} from './psu-routing.module';
import { PsuComponent} from './psu.component';
import { UserComponent } from './user/user.component';





@NgModule({
  declarations: [
    ...routedComponents,
    PsuComponent,
    UserComponent,
    /*
        yang modul hanya punya submenu tidak usah dideklarasikan
     */
  ],
  imports: [
    PsuRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbDialogModule,
    NbIconModule,
    NbInputModule, NbTabsetModule,
    NbTreeGridModule,
    NbWindowModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  ],
})
export class PsuModule {
}
