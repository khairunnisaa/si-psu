import { Observable } from 'rxjs';

export interface Camera {
  title: string;
  source: string;
  ip_camera: string;
}

export abstract class SecurityCamerasData {
  abstract getCamerasData(): Observable<Camera[]>;
}
