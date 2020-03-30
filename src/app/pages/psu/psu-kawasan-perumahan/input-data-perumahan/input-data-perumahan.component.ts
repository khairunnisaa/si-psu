import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";
import {LocalDataSource} from "ng2-smart-table";
import {TableDataPerumahan} from '../../../../@core/data/perumahan';

@Component({
  selector: 'ngx-input-data-perumahan',
  templateUrl: './input-data-perumahan.component.html',
  styleUrls: ['./input-data-perumahan.component.scss'],
})
export class InputDataPerumahanComponent implements OnInit {

  statusSelect = ['Sudah Serah Terima', 'Belum Serah Terima', 'Terlantar'];
  source: LocalDataSource;
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/
  statusSerahTerima: boolean;
  statusBelumSerahTerima: boolean;
  statusTerlantar: boolean;
  formPerumahan: FormGroup;

  public dataSaranaForm: FormGroup;
  public dataJalanSaluranForm: FormGroup;
  public dataTamanForm: FormGroup;
  public dataCCTVForm: FormGroup;
  urls: any[] = [];

  constructor(
    private getKecamatanService: TableDataKecamatan,
    private formBuilderDataSarana: FormBuilder,
    private formBuilderDataJalanSaluran: FormBuilder,
    private formBuilderDataTaman: FormBuilder,
    private formBuilderDataCCTV: FormBuilder,
    private fb: FormBuilder,
    private service: TableDataPerumahan,
    ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
    this.formPerumahan = new FormGroup({
      formDataPerumahan : this.fb.group({
        nama_perumahan : new FormControl(''),
        nama_pengembang : new FormControl(''),
        luas_perumahan : new FormControl(''),
        kecamatan : new FormControl(''),
        kelurahan : new FormControl(''),
        RT : new FormControl(''),
        RW : new FormControl(''),
        status : new FormControl(''),
        tgl_serah_terima : new FormControl(''),
        no_bast : new FormControl(''),
        sph : new FormControl(''),
        fotos: this.fb.array([this.createImageGroup('')]),
        saranas: this.fb.array([this.createDataSaranaFormGroup()]),
        jalansalurans: this.fb.array([this.createDataJalanSaluranFormGroup()]),
        dataTamanForm: this.fb.array([this.createDataTamanFormGroup()]),
        dataCCTV: this.fb.array([this.createDataCCTVFormGroup()]),
      }),
    })

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

  inputPerumahans() {
    console.log("form value perumahan", this.formPerumahan.value.formDataPerumahan);
    this.service.postData(this.formPerumahan.value.formDataPerumahan);
  }
  ngOnInit() {
    this.statusSerahTerima = false;
    this.statusBelumSerahTerima = false;
    this.statusTerlantar = false;
    this.disableKelurahan = true;
    this.dataSaranaForm = this.formBuilderDataSarana.group({
      dataSarana: this.formBuilderDataSarana.array([this.createDataSaranaFormGroup()]),
    });
    this.dataJalanSaluranForm = this.formBuilderDataJalanSaluran.group({
      dataJalanSaluran: this.formBuilderDataJalanSaluran.array([this.createDataJalanSaluranFormGroup()]),
    });
    this.dataTamanForm = this.formBuilderDataTaman.group({
      dataTaman: this.formBuilderDataTaman.array([this.createDataTamanFormGroup()]),
    });
    this.dataCCTVForm = this.formBuilderDataCCTV.group({
      dataCCTV: this.formBuilderDataCCTV.array([this.createDataCCTVFormGroup()]),
    });
    // this.formPerumahan = this.dataSaranaForm.get('dataSarana') as FormArray;
  }
  /**
   * Add Data......................................
   * */

  public addDataSarana() {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('saranas') as FormArray;
    dataSarana.push(this.createDataSaranaFormGroup())
  }

  public addDataJalanSaluran() {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('dataJalanSaluran') as FormArray;
    dataJalanSaluran.push(this.createDataJalanSaluranFormGroup())
  }

  public addDataTaman() {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('dataTamanForm') as FormArray;
    dataTaman.push(this.createDataTamanFormGroup())
  }

  public addDataCCTV() {
    const dataCCTV = this.formPerumahan.controls.formDataPerumahan.get('dataCCTV') as FormArray;
    dataCCTV.push(this.createDataCCTVFormGroup())
  }

  public addFotos(img) {
    const fotos = this.formPerumahan.controls.formDataPerumahan.get('fotos') as FormArray;
    // fotos.push(img);
    fotos.push(this.createImageGroup(img))
  }

  /**
   * Remove Data......................................
   * */
  public removeDataSarana(j: number) {
    const dataSarana = this.formPerumahan.controls.formDataPerumahan.get('saranas') as FormArray;
    if (dataSarana.length > 1) {
      dataSarana.removeAt(j)
    } else {
      dataSarana.reset()
    }
  }

  public removeDataJalanSaluran(k: number) {
    const dataJalanSaluran = this.formPerumahan.controls.formDataPerumahan.get('dataJalanSaluran') as FormArray;
    if (dataJalanSaluran.length > 1) {
      dataJalanSaluran.removeAt(k)
    } else {
      dataJalanSaluran.reset()
    }
  }

  public removeDataTaman(n: number) {
    const dataTaman = this.formPerumahan.controls.formDataPerumahan.get('dataTamanForm') as FormArray;
    if (dataTaman.length > 1) {
      dataTaman.removeAt(n)
    } else {
      dataTaman.reset()
    }
  }

  public removeDataCCTV(m: number) {
    const dataCCTV = this.formPerumahan.controls.formDataPerumahan.get('dataCCTV') as FormArray;
    if (dataCCTV.length > 1) {
      dataCCTV.removeAt(m)
    } else {
      dataCCTV.reset()
    }
  }
  /**
   * Create Data......................................
   * */

  private createDataSaranaFormGroup() {
    return this.fb.group({
      nama_sarana: '',
      luas_sarana: '',
      foto_sarana: '',
      kondisi_sarana: '',
      koordinat: '',
    })
  }

  private createDataJalanSaluranFormGroup(): FormGroup {
    return this.fb.group({
      'nama_jalan_saluran': '',
      'luas_jalan_saluran': '',
      'foto_jalan_saluran': '',
      'kondisi': '',
      'koordinatjalansalurans': '',
    })
  }

  private createDataTamanFormGroup(): FormGroup {
    return this.fb.group({
      'namaTaman': '',
      'luasTaman': '',
      'fotoTaman': '',
      'kondisiTaman': '',
      'koordinatTaman': '',
    })
  }

  private createDataCCTVFormGroup(): FormGroup {
    return this.fb.group({
      'namaCCTVPerumahan': '',
      'ipCameraPerumahan': '',
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
    if (status === "Sudah Serah Terima") {
      this.statusSerahTerima = true;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = false;
    } else if (status === "Belum Serah Terima") {
      this.statusBelumSerahTerima = true;
      this.statusTerlantar = false;
      this.statusSerahTerima = false;
    } else if (status === "Terlantar") {
      this.statusSerahTerima =  false;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = true;
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
