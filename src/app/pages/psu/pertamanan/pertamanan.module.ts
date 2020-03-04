import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetaSebaranPertamananComponent } from './peta-sebaran-pertamanan/peta-sebaran-pertamanan.component';
import { EntryDataPertamananComponent } from './entry-data-pertamanan/entry-data-pertamanan.component';
import { KondisiPertamananComponent } from './kondisi-pertamanan/kondisi-pertamanan.component';
import { KoordinatPertamananComponent } from './koordinat-pertamanan/koordinat-pertamanan.component';
import { IpCameraPertamananComponent } from './ip-camera-pertamanan/ip-camera-pertamanan.component';
import { KeteranganPertamananComponent } from './keterangan-pertamanan/keterangan-pertamanan.component';

@NgModule({
  declarations: [PetaSebaranPertamananComponent, EntryDataPertamananComponent, KondisiPertamananComponent, KoordinatPertamananComponent, IpCameraPertamananComponent, KeteranganPertamananComponent],
  imports: [
    CommonModule
  ]
})
export class PertamananModule { }
