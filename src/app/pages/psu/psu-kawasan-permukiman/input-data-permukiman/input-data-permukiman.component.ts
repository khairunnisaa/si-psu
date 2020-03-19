import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-input-data-permukiman',
  templateUrl: './input-data-permukiman.component.html',
  styleUrls: ['./input-data-permukiman.component.scss'],
})
export class InputDataPermukimanComponent implements OnInit {

  public emailForm: FormGroup;
  settings = {
    columns: {
      id: {
        title: 'ID KTP',
        type: 'number',
      },
      namaPengelolah: {
        title: 'Nama Pengelola',
        type: 'string',
      },
      umurPengelolah: {
        title: 'Umur ',
        type: 'number',
      },
      pendidikanTerakhir: {
        title: 'Pendidikan Terakhir',
        type: 'string',
      },
      tugas: {
        title: 'Tugas',
        type: 'string',
      },
      keterangan: {
        title: 'Keterangan',
        type: 'string',
      },
    },
  };


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([this.createEmailFormGroup()]),
    });
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
