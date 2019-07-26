import { CameraService } from './../services/camera.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(
    private camera: CameraService) {
      this.scss();
      this.showCamera();
  }

  ngOnInit() {}

  async scss() {
    await (window.document.querySelector('html') as HTMLElement).classList.add('cameraView');
  }

  showCamera() {
    this.camera.startCamera();
  }

}
