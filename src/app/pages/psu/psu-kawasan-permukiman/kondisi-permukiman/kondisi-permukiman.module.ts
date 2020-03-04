import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KondisiBaikPermukimanComponent } from './kondisi-baik-permukiman/kondisi-baik-permukiman.component';
import { KondisiRusakPermukimanComponent } from './kondisi-rusak-permukiman/kondisi-rusak-permukiman.component';
import { KondisiRinganPermukimanComponent } from './kondisi-ringan-permukiman/kondisi-ringan-permukiman.component';

@NgModule({
  declarations: [KondisiBaikPermukimanComponent, KondisiRusakPermukimanComponent, KondisiRinganPermukimanComponent],
  imports: [
    CommonModule
  ]
})
export class KondisiPermukimanModule { }
