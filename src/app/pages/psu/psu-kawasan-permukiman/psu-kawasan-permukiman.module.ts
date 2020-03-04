import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetaSebaranPermukimanComponent } from './peta-sebaran-permukiman/peta-sebaran-permukiman.component';
import { EntryDataPermukimanComponent } from './entry-data-permukiman/entry-data-permukiman.component';
import { StatusPermukimanComponent } from './status-permukiman/status-permukiman.component';
import { KondisiPermukimanComponent } from './kondisi-permukiman/kondisi-permukiman.component';
import { KoordinatPerumahanComponent } from './koordinat-perumahan/koordinat-perumahan.component';
import { IpCameraPerumahanComponent } from './ip-camera-perumahan/ip-camera-perumahan.component';
import { KeteranganPerumahanComponent } from './keterangan-perumahan/keterangan-perumahan.component';

@NgModule({
  declarations: [PetaSebaranPermukimanComponent, EntryDataPermukimanComponent, StatusPermukimanComponent, KondisiPermukimanComponent, KoordinatPerumahanComponent, IpCameraPerumahanComponent, KeteranganPerumahanComponent],
  imports: [
    CommonModule
  ]
})
export class PsuKawasanPermukimanModule { }
