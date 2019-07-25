import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { CameraPreview } = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor() { 
    CameraPreview.start();
  }

  ngOnInit() {
  }

}
