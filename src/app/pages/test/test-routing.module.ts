import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test.component';
import {CobaTestComponent} from './coba-test/coba-test.component';
import {CobaTestKeduaComponent} from './coba-test-kedua/coba-test-kedua.component';


const routes: Routes = [{
  path: '',
  component: TestComponent,
  children: [{
      path: 'coba-test',
      component: CobaTestComponent,
  },
    {
      path: 'coba-test-kedua',
      component: CobaTestKeduaComponent,
    },
  ],
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class TestRoutingModule { }

export const routedComponents = [
  CobaTestComponent,
  CobaTestKeduaComponent,
];


