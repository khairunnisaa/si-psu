import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalDataSource} from "ng2-smart-table";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {TableDataPerumahan} from "../../../../@core/data/perumahan";
import {TableDataPermukiman} from "../../../../@core/data/permukiman";

@Component({
  selector: 'ngx-input-data-permukiman',
  templateUrl: './input-data-permukiman.component.html',
  styleUrls: ['./input-data-permukiman.component.scss'],
})
export class InputDataPermukimanComponent implements OnInit {
  public dataPengelolaForm: FormGroup;
  public dataFotoTPUForm: FormGroup;
  public dataInventarisForm: FormGroup;
  public dataCCTVForm: FormGroup;
  formPermukiman: FormGroup;
  statusSudahOperasional: boolean;
  statusBelumOperasional: boolean;

  source: LocalDataSource;
  pendidikan = ['Tidak Ada Pendidikan', 'SD', 'SMP', 'SMK', 'SMA', 'Madrasah', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3'];
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;

  /** Disable Slect Kelurahan **/
  constructor(
              private formBuilderDataPengelola: FormBuilder,
              private formBuilderDataFotoTPU: FormBuilder,
              private formBuilderDataInventaris: FormBuilder,
              private formBuilderDataCCTV: FormBuilder,
              private getKecamatanService: TableDataKecamatan,
              private fb: FormBuilder,
              private service: TableDataPermukiman,
  ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;

    this.formPermukiman = new FormGroup({
      formDataPermukiman : this.fb.group({
        nama_tpu : new FormControl(''),
        luas_tpu : new FormControl(''),
        daya_tampung_tpu : new FormControl(''),
        tahun_digunakan : new FormControl(''),
        kecamatan : new FormControl(''),
        kelurahan : new FormControl(''),
        RT : new FormControl(''),
        RW : new FormControl(''),
        keterangan : new FormControl(''),
        pengelolas: this.fb.array([this.createPengelolaFormGroup()]),
        fotos: this.fb.array([this.createImageGroup('')]),
        inventarisalats: this.fb.array([this.createDataInventarisAlatFormGroup()]),
        status: this.fb.array([this.createDataStatusFormGroup()]),
        cctvs: this.fb.array([this.createDataCCTVFormGroup()]),
        koordinats: this.fb.array([this.createDataKoordinatFormGroup()]),
      }),
    });
  }

  ngOnInit() {
    this.disableKelurahan = true;
  }
  changeKecamatan(kecamatan) {
    this.disableKelurahan = false;
    this.kelurahan = this.getKecamatanService.getData().find(lokasi => lokasi.kecamatan === kecamatan).kelurahan;
  }

  changeKelurahan(kelurahan) {
    // this.kabupaten = this.getKecamatanService.getData().find(cntry => cntry.kecamatan ===
    // this.selectedData).states.find(state => state.name === state).cities;
    console.log("kelurahan ini", kelurahan)
  }

  disableTombolTambah($event: MouseEvent) {
    ($event.target as HTMLButtonElement).disabled = true;
    // Do actions.
  }

  public addDataPengelola() {
    const dataPengelola = this.dataPengelolaForm.get('dataPengelola') as FormArray;
    dataPengelola.push(this.createPengelolaFormGroup())
  }

  public addFotos(img) {
    const fotos = this.formPermukiman.controls.formDataPermukiman.get('fotos') as FormArray;
    // fotos.push(img);
    fotos.push(this.createImageGroup(img))
  }

  public addDataInventaris() {
    const dataInventaris = this.dataInventarisForm.get('dataInventaris') as FormArray;
    dataInventaris.push(this.createDataInventarisAlatFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }

  public removeDataPengelolah(j: number) {
    const dataPengelola = this.dataPengelolaForm.get('dataPengelola') as FormArray;
    if (dataPengelola.length > 1) {
      dataPengelola.removeAt(j)
    } else {
      dataPengelola.reset()
    }
  }

  public removeDataFotoTPU(k: number) {
    const dataFotoTPU = this.dataFotoTPUForm.get('dataFotoTPU') as FormArray;
    if (dataFotoTPU.length > 1) {
      dataFotoTPU.removeAt(k)
    } else {
      dataFotoTPU.reset()
    }
  }

  public removeDataInventaris(m: number) {
    const dataInventaris = this.dataInventarisForm.get('dataInventaris') as FormArray;
    if (dataInventaris.length > 1) {
      dataInventaris.removeAt(m)
    } else {
      dataInventaris.reset()
    }
  }

  public removeDataCCTV(p: number) {
    const dataCCTV = this.dataCCTVForm.get('dataCCTV') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(p)
    } else {
      dataCCTV.reset()
    }
  }

  /**
   * Create Data......................................
   * */

  private createPengelolaFormGroup() {
    return this.fb.group({
      nama: '',
      umur: '',
      pendidikan: '',
      tugas: '',
      keterangan: '',
    })
  }

  private createDataInventarisAlatFormGroup(): FormGroup {
    return this.fb.group({
      nama_alat: '',
      jumlah: '',
      keterangan: '',
    })
  }

  private createDataStatusFormGroup(): FormGroup {
    return this.fb.group({
      operasional: '',
      kondisi: '',
      keterangan: '',
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return this.fb.group({
      nama_cctv: '',
      ip_cctv: '',
      video: '',
    })
  }

  private createDataKoordinatFormGroup(): FormGroup {
    return this.fb.group({
      longitude: '',
      latitude: '',
    })
  }

  private createImageGroup(img): FormGroup {
    return this.fb.group({
      path_foto: img,
      nama_foto: '',
    })
  }

  onSelectOption(status) {
    console.log("onselect", status);
    if (status === "Sudah Operasional") {
      this.statusSudahOperasional = true;
      this.statusBelumOperasional = false;
    } else if (status === "Belum Operasional") {
      this.statusSudahOperasional = false;
      this.statusBelumOperasional = true;
    }
  }

  onFileUpload(event: any) {
    this.urls = [];
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      for (const file of selectedFiles) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
          this.addFotos(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
