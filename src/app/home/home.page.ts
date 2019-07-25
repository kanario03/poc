import { Component } from '@angular/core';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { AlertController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';

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
    public alertController: AlertController
  ) {
    this.information();
  }

  async information() {
    this.info = await Device.getInfo();
    console.log(this.info);
  }


  async launchExternalApp() {
    const ret = await App.openUrl({ url: `co.rabbot.android://tst` });
    console.log('Open url response: ', ret);
  }

  async presentAlertConfirm(msg) {
    const alert = await this.alertController.create({
      header: 'resultado!',
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });



  }
}
