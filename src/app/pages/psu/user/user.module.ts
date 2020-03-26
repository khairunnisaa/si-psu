import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule, NbTabsetModule,
  NbTreeGridModule,
  NbWindowModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { Ng2SmartTableModule} from 'ng2-smart-table';
import {
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { UserRoutingModule, routedComponents } from './user-routing.module';
import { KelolaDataUserComponent } from './kelola-data-user/kelola-data-user.component';
import { InputDataUserComponent } from './input-data-user/input-data-user.component';

@NgModule({
  declarations: [
    ...routedComponents,
    KelolaDataUserComponent,
    InputDataUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    NbDialogModule,
    NbIconModule,
    NbInputModule, NbTabsetModule,
    NbTreeGridModule,
    NbWindowModule,
    NbSpinnerModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
  ],
})
export class UserModule { }
