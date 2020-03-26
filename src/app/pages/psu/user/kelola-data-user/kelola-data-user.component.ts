import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {Location} from "@angular/common";
import {TableDataUser} from "../../../../@core/data/data-user";

@Component({
  selector: 'ngx-kelola-data-user',
  templateUrl: './kelola-data-user.component.html',
  styleUrls: ['./kelola-data-user.component.scss'],
})
export class KelolaDataUserComponent implements OnInit {

  source: LocalDataSource;
  settings = {
    actions: false,
    columns: {
      id: {
        title: 'No.',
        type: 'number',
        filter: false,
      },
      username: {
        title: 'Username',
        type: 'string',
        filter: false,
      },
      password: {
        title: 'Password',
        type: 'string',
        filter: false,
      },
      navigasi:
        {
          title: 'Navigasi',
          type: 'html',
          valuePrepareFunction: (cell, row) => {
            return `<a title="Edit" href="./../../pages/psu-user/edit-data-user/${row.id}" class="btn btn-outline-warning btn-lg"> <i class="fa fa-edit"></i></a>
                    <a title="Hapus" href="./../../pages/psu-user/hapus-data-user/${row.id}" class="btn btn-outline-danger btn-lg"> <i class="fa fa-trash"></i></a>`
          },
          filter: false,
        },
      },
  };

  constructor(
    private location: Location,
    private getDataUserService: TableDataUser) {
    const data = this.getDataUserService.getData();
    this.source = new LocalDataSource(data);
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
