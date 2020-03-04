import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KondisiRusakPertamananComponent } from './kondisi-rusak-pertamanan/kondisi-rusak-pertamanan.component';
import { KondisiBaikPertamananComponent } from './kondisi-baik-pertamanan/kondisi-baik-pertamanan.component';
import { KondisiRinganPertamananComponent } from './kondisi-ringan-pertamanan/kondisi-ringan-pertamanan.component';

@NgModule({
  declarations: [KondisiRusakPertamananComponent, KondisiBaikPertamananComponent, KondisiRinganPertamananComponent],
  imports: [
    CommonModule
  ]
})
export class KondisiPertamananModule { }
