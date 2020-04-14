import {Component, OnInit, TemplateRef} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Location} from '@angular/common';
import {TableDataPermukiman} from '../../../../@core/data/permukiman';
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";

import {RouterlinkKawasanPermukimanComponent} from "../routerlink-kawasan-permukiman/routerlink-kawasan-permukiman.component";
import {
  NbComponentStatus,
  NbDialogService,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from "@nebular/theme";

@Component({
  selector: 'ngx-kelola-data-permukiman',
  templateUrl: './kelola-data-permukiman.component.html',
  styleUrls: ['./kelola-data-permukiman.component.scss'],
})
export class KelolaDataPermukimanComponent implements OnInit {

  /**
   * Variabel Disiini ..................................
   */

  totalData: Promise<any>;
  idData: any;
  statustoast: NbComponentStatus = 'primary';
  loading = false;

  /**
   * Variabel disini ......................................
   */

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
    actions: {
      position: 'right',
      columnTitle: 'Navigasi',
      add: false,
      filter: false,
    },

    columns: {
      id: {
        title: 'No.',
        type: 'number',
        filter: false,
      },
      nama_tpu: {
        title: 'Nama Tempat Pemakaman Umum (TPU)',
        type: 'custom',
        filter: false,
        valuePrepareFunction: (cell, row) => {
          return cell;
        },
        renderComponent: RouterlinkKawasanPermukimanComponent,
      },
      luas_tpu: {
        title: 'Luas TPU',
        type: 'string',
        filter: false,
      },
      data_tampung_tpu: {
        title: 'Daya Tampung',
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
  statusSelect = ['Sudah Operasional', 'Belum Operasional'];
  kecamatan: string[];
  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];
  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;

  /** Disable Slect Kelurahan **/
  constructor(
    private service: TableDataPermukiman,
    private getKecamatanService: TableDataKecamatan,
    private location: Location,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService,
  ) {
    // const data = this.service.getData();
    this.source = new LocalDataSource();
    const data = this.service.getData().then((datas) => {
      console.log("datapermukiman", datas);
      this.source.load(datas);
      this.totalData = datas.length;
    });
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
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
          context: `Apakah Anda Akan Menghapus Data ID ${this.idData.data.id} Nama Permukiman ${this.idData.data.nama_tpu} ?` ,
          closeOnBackdropClick: false,
        });
  }


}
