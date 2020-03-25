import { Component, OnInit } from '@angular/core';
import {LocalDataSource} from "ng2-smart-table";
import {TableDataUser} from "../../../@core/data/data-user";
import {Location} from "@angular/common";

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

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
