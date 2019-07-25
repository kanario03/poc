import { Component } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';


import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';

const { Device, App } = Plugins;
const options: AppLauncherOptions = {
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  info: any;
  display: any;

  constructor(
    private appLauncher: AppLauncher,
    private router: Router
  ) {
    this.information();
  }

  async information() {
    this.info = await Device.getInfo();
    console.log(this.info);
  }


  async launchExternalApp() {
    const ret = await App.canOpenUrl({ url: `com.getcapacitor.myapp` });
    console.log('Open url response: ', ret);
  }

  openCamera() {
    this.router.navigate(['camera']);
  }



}
