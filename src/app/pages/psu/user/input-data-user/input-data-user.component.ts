import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-input-data-user',
  templateUrl: './input-data-user.component.html',
  styleUrls: ['./input-data-user.component.scss'],
})
export class InputDataUserComponent implements OnInit {

  levelUser = ['Administrator', 'Operator PSU Perumahan', 'Operator PSU Kawasan Permukiman',
    'Operator PSU Pertamanan'];

  constructor() { }

  ngOnInit() {
  }

}
