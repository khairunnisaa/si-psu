import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KondisiBaikComponent } from './kondisi-baik/kondisi-baik.component';
import { KondisiRusakComponent } from './kondisi-rusak/kondisi-rusak.component';
import { KondisiRinganComponent } from './kondisi-ringan/kondisi-ringan.component';

@NgModule({
  declarations: [KondisiBaikComponent, KondisiRusakComponent, KondisiRinganComponent],
  imports: [
    CommonModule
  ]
})
export class KondisiPerumahanModule { }
