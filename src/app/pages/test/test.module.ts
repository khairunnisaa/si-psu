import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { TestRoutingModule, routedComponents} from './test-routing.module';
import { CobaTestKeduaComponent } from './coba-test-kedua/coba-test-kedua.component';

@NgModule({
  declarations: [...routedComponents,
    TestComponent,
    CobaTestKeduaComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
  ],
})
export class TestModule { }
