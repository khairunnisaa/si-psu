import {Component, OnInit, TemplateRef} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {TableDataPertamanan} from '../../../../@core/data/pertamanan';
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {RouterlinkDataPertamananComponent} from "../routerlink-data-pertamanan/routerlink-data-pertamanan.component";
import {Location} from '@angular/common';
import {
  NbComponentStatus,
  NbDialogService,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from "@nebular/theme";

@Component({
  selector: 'ngx-kelola-data-pertamanan',
  templateUrl: './kelola-data-pertamanan.component.html',
  styleUrls: ['./kelola-data-pertamanan.component.scss'],
})
export class KelolaDataPertamananComponent implements OnInit {

  /**
   * Variabel Disini................................
   */
  statustoast: NbComponentStatus = 'primary';
  totalData: Promise<any>;
  loading = false;
  idData: any;

  /**
   * Batas Variabel................................
   */


  source: LocalDataSource;
  years: any[];
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
    actions: {
      position: 'right',
      columnTitle: 'Navigasi',
      add: false,
      filter: false,
    },

    columns: {
      no: {
        title: 'No.',
        type: 'html',
        filter: false,
        width: 10,
        valuePrepareFunction(value, row, cell) {
          return cell.row.index + 1;
        },
      },

      id: {
        title: 'ID',
        type: 'number',
        filter: false,
      },
      nama_taman: {
        title: 'Nama Taman',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell) => {
          return cell;
        },
        renderComponent: RouterlinkDataPertamananComponent,
      },
      nama_pelaksana: {
        title: 'Nama Pelaksana',
        type: 'string',
        filter: false,
      },
      luas_taman: {
        title: 'Luas Taman',
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

  constructor(private service: TableDataPertamanan,
              private getKecamatanService: TableDataKecamatan,
              private location: Location,
              private toastrService: NbToastrService,
              private dialogService: NbDialogService) {

    this.source = new LocalDataSource();
    const data = this.service.getData().then((datas) => {
      // console.log("datapertamanan", datas);
      this.source.load(datas);
      this.totalData = datas.length;
    });
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
    this.years = [];
    for (let i = 0; i <= 10; ++i) {
      this.years.push(2010 + i);
    }
  }

  changeKecamatan(kecamatan) {
    console.log("kecamatan --", kecamatan);
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
    console.log("kelurahan", this.kelurahan);
  }

  changeKelurahan(kelurahan) {
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan)
  }

  ngOnInit() {
    this.disableKelurahan = true;
  }

  goBack() {
    this.location.back();
  }

  onDeleteConfirm(event, ref): void {
    // console.log("event delete:", ref);
    this.service.deleteData(this.idData.data.id);
    this.showToast(this.statustoast, this.idData.data.id);
    ref.close(this.idData.data.id);
    this.idData.confirm.resolve();

    this.loading = true;
    setTimeout(() => this.loading = false, 3000);

    this.totalData = this.service.getData().then((datas) => {
      this.source.load(datas);
      this.totalData = datas.length;
    });
  }

  private showToast(type: NbComponentStatus, data) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 3000,
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
          context: `Apakah Anda Akan Menghapus Data ID ${this.idData.data.id} Nama Taman ${this.idData.data.nama_taman} ?`,
          closeOnBackdropClick: false,
        });
  }


}
