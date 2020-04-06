import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: 'assets/images/camera2.jpg',
      ip_camera: '112.133.111.222',
    },
    {
      title: 'Camera #2',
      source: 'assets/images/camera2.jpg',
      ip_camera: '112.133.111.222',
    },
    {
      title: 'Camera #3',
      source: 'assets/images/camera3.jpg',
      ip_camera: '112.133.111.222',
    },
    {
      title: 'Camera #4',
      source: 'assets/images/camera4.jpg',
      ip_camera: '112.133.111.222',
    },
    {
      title: 'Camera #5',
      source: 'assets/images/camera4.jpg',
      ip_camera: '112.133.111.222',
    },

    {
      title: 'Camera #6',
      source: 'assets/images/camera4.jpg',
      ip_camera: '112.133.111.222',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
