(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{DrrU:function(e,t,i){"use strict";i.d(t,"b",function(){return o}),i.d(t,"a",function(){return r}),i.d(t,"c",function(){return s});var n=i("8Y7J");class a{constructor(e,t){this._mimeType=null,this._imageAsBase64=null,this._imageAsDataUrl=null,this._mimeType=t,this._imageAsDataUrl=e}get imageAsBase64(){return this._imageAsBase64?this._imageAsBase64:this._imageAsBase64=this.getDataFromDataUrl(this._imageAsDataUrl)}get imageAsDataUrl(){return this._imageAsDataUrl}getDataFromDataUrl(e){return e.replace("data:"+this._mimeType+";base64,","")}}class s{static getAvailableVideoInputs(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?new Promise((e,t)=>{navigator.mediaDevices.enumerateDevices().then(t=>{e(t.filter(e=>"videoinput"===e.kind))}).catch(function(e){t(e.message||e)})}):Promise.reject("enumerateDevices() not supported.")}}const r=(()=>{class e{constructor(){this.width=640,this.height=480,this.videoOptions=e.DEFAULT_VIDEO_OPTIONS,this.allowCameraSwitch=!0,this.mediaStream=null,this.availableVideoInputs=[],this.activeVideoInputIndex=-1,this.videoInitialized=!1,this.imageCapture=new n.EventEmitter,this.initError=new n.EventEmitter,this.imageClick=new n.EventEmitter,this.cameraSwitched=new n.EventEmitter,this.activeVideoSettings=null}ngAfterViewInit(){this.detectAvailableDevices().then(e=>{this.switchToVideoInput(e.length>0?e[0].deviceId:null)}).catch(e=>{this.initError.next({message:e}),this.switchToVideoInput(null)})}ngOnDestroy(){this.stopMediaTracks(),this.unsubscribeFromSubscriptions()}set trigger(e){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.triggerSubscription=e.subscribe(()=>{this.takeSnapshot()})}set switchCamera(e){this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe(),this.switchCameraSubscription=e.subscribe(e=>{"string"==typeof e?this.switchToVideoInput(e):this.rotateVideoInput(!1!==e)})}static getMediaConstraintsForDevice(e,t){let i=t||this.DEFAULT_VIDEO_OPTIONS;return e&&(i.deviceId={exact:e}),i}takeSnapshot(){let e=this.video.nativeElement,t={width:this.width,height:this.height};e.videoWidth&&(t.width=e.videoWidth,t.height=e.videoHeight);let i=this.canvas.nativeElement;i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(this.video.nativeElement,0,0);let n=i.toDataURL("image/jpeg");this.imageCapture.next(new a(n,"image/jpeg"))}rotateVideoInput(e){this.availableVideoInputs&&this.availableVideoInputs.length>1&&this.switchToVideoInput(this.availableVideoInputs[(this.activeVideoInputIndex+(e?1:this.availableVideoInputs.length-1))%this.availableVideoInputs.length].deviceId)}switchToVideoInput(e){this.videoInitialized=!1,this.stopMediaTracks(),this.initWebcam(e,this.videoOptions)}get videoWidth(){return Math.min(this.width,this.height*(this.activeVideoSettings?this.activeVideoSettings.aspectRatio:this.width/this.height))}get videoHeight(){return Math.min(this.height,this.width/(this.activeVideoSettings?this.activeVideoSettings.aspectRatio:this.width/this.height))}initWebcam(t,i){let n=this.video.nativeElement;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){let a=e.getMediaConstraintsForDevice(t,i);navigator.mediaDevices.getUserMedia({video:a}).then(e=>{this.mediaStream=e,n.srcObject=e,n.play(),this.activeVideoSettings=e.getVideoTracks()[0].getSettings();let t=e.getVideoTracks()[0].getSettings().deviceId;this.activeVideoInputIndex=t?this.availableVideoInputs.findIndex(e=>e.deviceId===t):-1,this.videoInitialized=!0,this.cameraSwitched.next(t)}).catch(e=>{this.initError.next({message:e.message,mediaStreamError:e})})}else this.initError.next({message:"Cannot read UserMedia from MediaDevices."})}stopMediaTracks(){this.mediaStream&&this.mediaStream.getTracks&&this.mediaStream.getTracks().forEach(e=>e.stop())}unsubscribeFromSubscriptions(){this.triggerSubscription&&this.triggerSubscription.unsubscribe(),this.switchCameraSubscription&&this.switchCameraSubscription.unsubscribe()}detectAvailableDevices(){return new Promise((e,t)=>{s.getAvailableVideoInputs().then(t=>{this.availableVideoInputs=t,e(t)}).catch(e=>{this.availableVideoInputs=[],t(e)})})}}return e.DEFAULT_VIDEO_OPTIONS={facingMode:"environment"},e})(),o=(()=>(class{}))()},"hf/o":function(e,t,i){"use strict";i.d(t,"a",function(){return s}),i.d(t,"b",function(){return o});var n=i("8Y7J"),a=(i("DrrU"),i("SVse")),s=n["\u0275crt"]({encapsulation:0,styles:['.webcam-wrapper[_ngcontent-%COMP%] {\n      display: inline-block;\n      position: relative;\n      line-height: 0; }\n      .webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n        display: none; }\n      .webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%] {\n        background-color: rgba(0, 0, 0, 0.1);\n        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC");\n        background-repeat: no-repeat;\n        border-radius: 5px;\n        position: absolute;\n        right: 13px;\n        top: 10px;\n        height: 48px;\n        width: 48px;\n        background-size: 80%;\n        cursor: pointer;\n        background-position: center;\n        -webkit-transition: background-color 0.2s ease;\n        transition: background-color 0.2s ease; }\n        .webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover {\n          background-color: rgba(0, 0, 0, 0.18); }'],data:{}});function r(e){return n["\u0275vid"](0,[(e()(),n["\u0275eld"](0,0,null,null,0,"div",[["class","camera-switch"]],null,[[null,"click"]],function(e,t,i){var n=!0;return"click"===t&&(n=!1!==e.component.rotateVideoInput(!0)&&n),n},null,null))],null,null)}function o(e){return n["\u0275vid"](0,[n["\u0275qud"](402653184,1,{video:0}),n["\u0275qud"](402653184,2,{canvas:0}),(e()(),n["\u0275eld"](2,0,null,null,4,"div",[["class","webcam-wrapper"]],null,[[null,"click"]],function(e,t,i){var n=!0;return"click"===t&&(n=!1!==e.component.imageClick.next()&&n),n},null,null)),(e()(),n["\u0275eld"](3,0,[[1,0],["video",1]],null,0,"video",[["autoplay",""],["muted",""],["playsinline",""]],[[8,"width",0],[8,"height",0]],null,null,null,null)),(e()(),n["\u0275and"](16777216,null,null,1,null,r)),n["\u0275did"](5,16384,null,0,a.m,[n.ViewContainerRef,n.TemplateRef],{ngIf:[0,"ngIf"]},null),(e()(),n["\u0275eld"](6,0,[[2,0],["canvas",1]],null,0,"canvas",[],[[8,"width",0],[8,"height",0]],null,null,null,null))],function(e,t){var i=t.component;e(t,5,0,i.allowCameraSwitch&&i.availableVideoInputs.length>1&&i.videoInitialized)},function(e,t){var i=t.component;e(t,3,0,i.videoWidth,i.videoHeight),e(t,6,0,i.width,i.height)})}}}]);