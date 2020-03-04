import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KegiatanFisikBerandaComponent } from './kegiatan-fisik-beranda/kegiatan-fisik-beranda.component';
import { KegiatanFisikPetaPesebaranComponent } from './kegiatan-fisik-peta-pesebaran/kegiatan-fisik-peta-pesebaran.component';
import { KegiatanFisikRouteModule } from './kegiatan-fisik-route.module';

@NgModule({
  declarations: [KegiatanFisikBerandaComponent, KegiatanFisikPetaPesebaranComponent],
  imports: [
    CommonModule,
    KegiatanFisikRouteModule,
  ],
})
export class KegiatanFisikModule { }
