import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalDataSource} from "ng2-smart-table";
import {TableDataKecamatan} from "../../../../@core/data/kecamatan";

@Component({
  selector: 'ngx-input-data-permukiman',
  templateUrl: './input-data-permukiman.component.html',
  styleUrls: ['./input-data-permukiman.component.scss'],
})
export class InputDataPermukimanComponent implements OnInit {

  public emailForm: FormGroup;

  source: LocalDataSource;
  kecamatan: string[];  /**  Variabel Array Select Data Kecamatan **/
  kelurahan: string[];  /**  Variabel Array Select Data Kelurahan **/
  disableKelurahan: boolean;  /** Disable Slect Kelurahan **/
  constructor(private formBuilder: FormBuilder,
              private getKecamatanService: TableDataKecamatan,
  ) {
    const data = this.getKecamatanService.getData();
    this.source = new LocalDataSource(data);
    this.kecamatan = this.getKecamatanService.getData();
    this.disableKelurahan = true;
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([this.createEmailFormGroup()]),
    });
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

  public addEmailFormGroup() {
    const emails = this.emailForm.get('emails') as FormArray
    emails.push(this.createEmailFormGroup())
  }

  public removeOrClearEmail(i: number) {
    const emails = this.emailForm.get('emails') as FormArray
    if (emails.length > 1) {
      emails.removeAt(i)
    } else {
      emails.reset()
    }
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl('', Validators.email),
      'emailLabel': new FormControl(''),
    })
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
