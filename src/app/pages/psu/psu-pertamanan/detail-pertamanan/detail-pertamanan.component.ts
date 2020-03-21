import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-detail-pertamanan',
  templateUrl: './detail-pertamanan.component.html',
  styleUrls: ['./detail-pertamanan.component.scss'],
})
export class DetailPertamananComponent implements OnInit {
  public state = '';
  // @Input()
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.state = window.history.state;
    console.log("states uy", this.state);
    // history.state.data
  }

}
