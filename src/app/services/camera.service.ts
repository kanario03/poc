import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from '@ionic-native/camera-preview/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {


  constructor(
    private cameraPreview: CameraPreview,
    private alert: AlertController
  ) {

  }


  startCamera() {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: window.screen.width * 0,
      y: window.screen.height * 0,
      width: window.screen.width * 0.5,
      height: window.screen.height * 0.5,
      camera: 'rear',
      tapPhoto: false,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };


    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
        this.presentAlert(res);
      },
      (err) => {
        console.log(err);
        this.presentAlert(err);
      });

  }

  async presentAlert(msg) {
    const alert = await this.alert.create({
      header: 'Camera',
      subHeader: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
