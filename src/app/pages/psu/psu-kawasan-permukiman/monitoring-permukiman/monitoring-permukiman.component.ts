import { Component, OnInit } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'ngx-monitoring-permukiman',
  templateUrl: './monitoring-permukiman.component.html',
  styleUrls: ['./monitoring-permukiman.component.scss'],
})
export class MonitoringPermukimanComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // latest snapshot
  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

}
