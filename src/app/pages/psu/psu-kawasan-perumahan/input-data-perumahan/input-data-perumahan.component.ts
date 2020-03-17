import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'ngx-input-data-perumahan',
  templateUrl: './input-data-perumahan.component.html',
  styleUrls: ['./input-data-perumahan.component.scss'],
})
export class InputDataPerumahanComponent implements OnInit {

  statusSerahTerima: boolean;
  statusBelumSerahTerima: boolean;
  statusTerlantar: boolean;
  public emailForm: FormGroup;
  public jalanDanSaluranForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private jalanDanSaluranformBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.statusSerahTerima = false;
    this.statusBelumSerahTerima = false;
    this.statusTerlantar = false;
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([this.createEmailFormGroup()]),
    });
    this.jalanDanSaluranForm = this.jalanDanSaluranformBuilder.group({
      jalanDanSaluran: this.jalanDanSaluranformBuilder.array([this.createjalanDanSaluranGroup()]),
    });
  }

  public addEmailFormGroup() {
    const emails = this.emailForm.get('emails') as FormArray;
    emails.push(this.createEmailFormGroup())
  }

  public addjalanDanSaluranGroup() {
    const jalanDanSaluran = this.jalanDanSaluranForm.get('jalan') as FormArray;
    jalanDanSaluran.push(this.createjalanDanSaluranGroup())
  }

  public removeOrClearEmail(i: number) {
    const emails = this.emailForm.get('emails') as FormArray;
    if (emails.length > 1) {
      emails.removeAt(i)
    } else {
      emails.reset()
    }
  }

  public removejalanDanSaluran(i: number) {
    const jalanDanSaluran = this.jalanDanSaluranForm.get('jalan') as FormArray;
    if (jalanDanSaluran.length > 1) {
      jalanDanSaluran.removeAt(i)
    } else {
      jalanDanSaluran.reset()
    }
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      'emailAddress': new FormControl(''),
      'emailLabel': new FormControl(''),
    })
  }

  private createjalanDanSaluranGroup(): FormGroup {
    return new FormGroup({
      'jalan': new FormControl(''),
      'jalans': new FormControl(''),
    })
  }

  onSelectOption(status) {
    console.log("onselect", status);
    if (status === "1") {
      this.statusSerahTerima = true;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = false;
    } else if (status === "2") {
      this.statusBelumSerahTerima = true;
      this.statusTerlantar = false;
      this.statusSerahTerima = false;
    } else if (status === "3") {
      this.statusSerahTerima =  false;
      this.statusBelumSerahTerima = false;
      this.statusTerlantar = true;
    }
  }
}
