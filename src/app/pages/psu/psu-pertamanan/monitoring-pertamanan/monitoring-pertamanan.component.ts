import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'ngx-monitoring-pertamanan',
  templateUrl: './monitoring-pertamanan.component.html',
  styleUrls: ['./monitoring-pertamanan.component.scss'],
})
export class MonitoringPertamananComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // latest snapshot
  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }


}
