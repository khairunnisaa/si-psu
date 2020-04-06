import {Component, Input, OnInit, ElementRef, ViewChild, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {Camera, SecurityCamerasData} from "../../../../@core/data/security-cameras";
import {NbComponentSize, NbMediaBreakpointsService, NbThemeService} from "@nebular/theme";
import JSMpeg from '@cycjimmy/jsmpeg-player';
import {map, takeUntil} from "rxjs/operators";
// const JSMpeg = require('jsmpeg-player');


@Component({
  selector: 'ngx-detail-perumahan',
  templateUrl: './detail-perumahan.component.html',
  styleUrls: ['./detail-perumahan.component.scss'],
})
export class DetailPerumahanComponent implements OnInit, OnDestroy {


  public state = {
    dataPerumahan: {
      id: '',
      nama_perumahan: '',
      nama_pengembang: '',
      luas_perumahan: '',
      jumlah_perumahan: '',
      jumlah_foto: '',
      kecamatan: '',
      kelurahan: '',
      RT: '',
      RW: '',
      keterangan: '',
      CCTV: '',
      hardscape: '',
      softscape: '',
      peralatan_pemelihara: '',
      fotos: [{
        id: '',
        nama_foto: '',
        path_foto: '',
      }],
      petugas: '',
      saranas: [{
        id: '',
        nama_sarana: '',
        luas_sarana: '',
        foto_sarana: '',
        kondisi_sarana: '',
        koordinat : [{
          longitude: '',
          latitude: '',
        }],
      }],
      jumlah_rumah: '',
      status: '',
      tgl_serah_terima: '',
      no_bast: '',
      sph: '',
      jalansalurans: [{
        id: '',
        nama_jalan_saluran: '',
        luas_jalan_saluran: '',
        foto_jalan_saluran: '',
        kondisi: '',
        koordinattamans: [{
          longitude: '',
          latitude: '',
        }],
      }],
      tamans: [{
        id: '',
        nama_taman: '',
        luas_taman: '',
        foto_taman: '',
        kondisi: '',
        koordinat: [{
          longitude: '',
          latitude: '',
        }],
      }],
      koordinat_perumahan: {
        longitude: '',
        latitude: '',
      },
      cctvs: [{
        id: '',
        nama_cctv: '',
        ip_cctv: '',
        video: '',
      }],
    },
  };

  private destroy$ = new Subject<void>();

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;
  actionSize: NbComponentSize = 'medium';
  @ViewChild('streaming', {static: false}) streamingcanvas: ElementRef;
  constructor( private themeService: NbThemeService,
               private breakpointService: NbMediaBreakpointsService,
               private securityCamerasService: SecurityCamerasData) {}

  ngOnInit() {

    // let player = new JSMpeg.Player('ws://localhost:9999', {
    //   canvas: this.streamingcanvas, autoplay: true, audio: false, loop: true,
    // });

    this.state = window.history.state;
    console.log('State Perumahan', this.state);
    this.securityCamerasService.getCamerasData()
    .pipe(takeUntil(this.destroy$))
    .subscribe((cameras: Camera[]) => {
      this.cameras = cameras;
      this.selectedCamera = this.cameras[0];
    });

    const breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
    .pipe(map(([, breakpoint]) => breakpoint.width))
    .subscribe((width: number) => {
      this.actionSize = width > breakpoints.md ? 'medium' : 'small';
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }
}


