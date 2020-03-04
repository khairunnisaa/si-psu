import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetaSebaranPerumahanComponent } from './peta-sebaran-perumahan/peta-sebaran-perumahan.component';
import { EntryDataPerumahanComponent } from './entry-data-perumahan/entry-data-perumahan.component';
import { StatusPerumahanComponent } from './status-perumahan/status-perumahan.component';
import { KondisiPerumahanComponent } from './kondisi-perumahan/kondisi-perumahan.component';
import { KoordinatPerumahanComponent } from './koordinat-perumahan/koordinat-perumahan.component';
import { IpCameraPerumahanComponent } from './ip-camera-perumahan/ip-camera-perumahan.component';
import { KertanganPerumahanComponent } from './kertangan-perumahan/kertangan-perumahan.component';

@NgModule({
  declarations: [PetaSebaranPerumahanComponent, EntryDataPerumahanComponent, StatusPerumahanComponent, KondisiPerumahanComponent, KoordinatPerumahanComponent, IpCameraPerumahanComponent, KertanganPerumahanComponent],
  imports: [
    CommonModule
  ]
})
export class PsuKawasanPerumahanModule { }
