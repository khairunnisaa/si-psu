import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Location} from '@angular/common';
import JSMpeg from '@cycjimmy/jsmpeg-player';

import {TableDataPerumahan} from '../../../../@core/data/perumahan';
import {RouterLinkPerumahanComponent} from "../router-link-perumahan/router-link-perumahan.component";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {
  NbComponentStatus,
  NbDialogService,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from "@nebular/theme";
import {Ng2SmartTableComponent} from "ng2-smart-table/ng2-smart-table.component";

@Component({
  selector: 'ngx-entry-data-perumahan',
  templateUrl: './kelola-data-perumahan.html',
  styleUrls: ['./kelola-data-perumahan.component.scss'],
})
export class KelolaDataPerumahanComponent implements OnInit, AfterViewInit {
  data_rumah_json = '';
  statustoast: NbComponentStatus = 'primary';
  years: any[];
  totalData: Promise<any>;
  idData: any;
  @ViewChild('table', {static: false})
  smartTable: Ng2SmartTableComponent;
  source: LocalDataSource;
  settings = {
    edit: {
      editButtonContent: '<i class="btn btn-outline-warning btn-lg fa fa-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="btn btn-outline-danger btn-lg fa fa-trash"></i>',
      confirmDelete: true,
    },
    mode: 'external',
    actions: {
      position: 'right',
      columnTitle: 'Navigasi',
      add: false,
      filter: false,
    },

    columns: {
      no: {
        title: 'No.',
        type: 'number',
        filter: false,
        valuePrepareFunction(value, row, cell) {
          return cell.row.index + 1;
          },
      },

      id: {
        title: 'ID',
        type: 'number',
        filter: false,
      },
      nama_perumahan: {
        name: 'nama_perumahan',
        title: 'Nama Perumahan',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return cell;
        },
        renderComponent: RouterLinkPerumahanComponent,
      },
      nama_pengembang: {
        title: 'Nama Pengembang',
        filter: false,
        type: 'string',
      },
      luas_perumahan: {
        title: 'Luas Perumahan (m2)',
        type: 'string',
        filter: false,
      },
      kecamatan: {
        title: 'Kecamatan',
        type: 'string',
        filter: false,
      },
      kelurahan: {
        title: 'Kelurahan / Desa',
        type: 'string',
        filter: false,
      },
      RT: {
        title: 'RT',
        type: 'string',
        filter: false,
      },
      RW: {
        title: 'RT',
        type: 'string',
        filter: false,
      },
    },
  };
  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  kecamatan: string[];
  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];
  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;
  /** Disable Slect Kelurahan **/

  status = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  @ViewChild('streaming', {static: false}) streamingcanvas: ElementRef;
  constructor(private service: TableDataPerumahan,
              private getKecamatanService: TableDataKecamatan,
              private location: Location,
              private toastrService: NbToastrService,
              private dialogService: NbDialogService) {
    this.source = new LocalDataSource();
    this.totalData = this.service.getData().then((datas) => {
      this.source.load(datas);
      this.totalData = datas.length;
    });
    // this.lengthData = this.totalData.length;
    this.kecamatan = this.getKecamatanService.getData();

    this.disableKelurahan = true;
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
      this.years.push(2010 + i);
    }
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    this.smartTable.edit.subscribe( (dataObject: any) => {
      console.log('Edit dong');
      console.log(dataObject);
    });
    this.smartTable.delete.subscribe( (dataObject: any) => {
    });
  }
  changeKecamatan(kecamatan) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'kecamatan',
        search: kecamatan,
      },
    ], true);
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
  }

  changeKelurahan(kelurahan, kecamatan) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'kecamatan',
        search: kecamatan,
      },
      {
        field: 'kelurahan',
        search: kelurahan,
      },
    ], true);
  }

  exportAsXLSX() {
    // this.service.exportAsExcelFile(this.service.getData(), 'perumahan');
  }

  onFileChange(event) {
    this.data_rumah_json = this.service.importFileExcel(event);
  }

  ngOnInit() {
    this.disableKelurahan = true;
    // let player = new JSMpeg.Player('ws://localhost:9999',
    //     { canvas: this.streamingcanvas.nativeElement, autoplay: true, audio: false, loop: true })
  }

  statusChange(status) {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'status',
        search: status,
      },
    ], false);
  }

  goBack() {
    this.location.back();
  }

  onDeleteConfirm(event, ref): void {
    console.log("event delete:", ref);
      this.service.deleteData(this.idData.data.id);
      this.idData.confirm.resolve();
      ref.close(this.idData.data.id);
      this.showToast(this.statustoast, this.idData.data.id);
  }

  private showToast(type: NbComponentStatus, data) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    this.toastrService.show(
        "Berhasil menghapus data",
        `Data perumahan ${data}`,
        config);
  }

  dialogHapusData(event, dialog: TemplateRef<any>) {
    console.log('dialog', event);
    this.idData = event;
    this.dialogService.open(
        dialog,
        {
          context: `Apakah Anda Akan Menghapus Data ID Ini ${this.idData.data.id} ?` ,
          closeOnBackdropClick: false,
        });
  }
}
