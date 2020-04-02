import {Injectable} from '@angular/core';
import {TableDataUser} from "../data/data-user";

@Injectable({
  providedIn: 'root',
})
export class DataUserService extends TableDataUser {

  dataUser = [
    {
      id: 1,
      username: 'admin',
      password: '12345',
      level: 'admin',
    },
    {
      id: 2,
      username: 'aditya',
      password: '12345',
      level: 'Operator PSU Pertamanan',
    },
    {
      id: 3,
      username: 'khairunnisa',
      password: 'khairunnisa',
      level: 'Operator PSU Perumahan',
    },
    {
      id: 4,
      username: 'Jono Oh Jono',
      password: '123456789',
      level: 'Operator PSU Kawasan Permukiman',
    },
    ];

  getData() {
    return this.dataUser;
  }
}
