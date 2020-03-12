import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-input-data-permukiman',
  templateUrl: './input-data-permukiman.component.html',
  styleUrls: ['./input-data-permukiman.component.scss'],
})
export class InputDataPermukimanComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID KTP',
        type: 'number',
      },
      namaPengelolah: {
        title: 'Nama Pengelolah',
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


  constructor() { }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
