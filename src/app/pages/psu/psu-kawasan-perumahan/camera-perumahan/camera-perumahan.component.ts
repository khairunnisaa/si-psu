import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {NbMediaBreakpointsService, NbThemeService} from "@nebular/theme";
import { NbComponentSize } from '@nebular/theme';
import {Camera, SecurityCamerasData} from "../../../../@core/data/security-cameras";
import {map, takeUntil} from "rxjs/operators";
import JSMpeg from '@cycjimmy/jsmpeg-player';

@Component({
  selector: 'ngx-app-camera-perumahan',
  templateUrl: './camera-perumahan.component.html',
  styleUrls: ['./camera-perumahan.component.scss'],
})
export class CameraPerumahanComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();

  cameras: Camera[];
  selectedCamera: Camera;
  isSingleView = false;
  actionSize: NbComponentSize = 'medium';
  @ViewChild('streaming', {static: false}) streamingcanvas: ElementRef;
  constructor(
      private themeService: NbThemeService,
      private breakpointService: NbMediaBreakpointsService,
      private securityCamerasService: SecurityCamerasData,
  ) {}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
  }

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  public ngOnInit(): void {
    const streamingcanvas = document.getElementById("canvas");
    let player = new JSMpeg.Player('ws://localhost:9999', {
      canvas: streamingcanvas, autoplay: true, audio: false, loop: true,
    })
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });

    this.securityCamerasService.getCamerasData()
    .pipe(takeUntil(this.destroy$))
    .subscribe((cameras: Camera[]) => {
      this.cameras = cameras;
      this.selectedCamera = this.cameras[0];
    });

    const breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
    .pipe(map(([, breakpoint]) => breakpoint.width))
    .subscribe((width: number) => {
      this.actionSize = width > breakpoints.md ? 'medium' : 'small';
    });
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.pictureTaken.emit(webcamImage);
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}

