import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'ngx-monitoring-perumahan',
  templateUrl: './monitoring-perumahan.component.html',
  styleUrls: ['./monitoring-perumahan.component.scss'],
})
export class MonitoringPerumahanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // latest snapshot
  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

}
