import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';



@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Internet Banking',
      value: 'IB',
      checked: true
    });

    
    alert.addInput({
      type: 'radio',
      label: 'COD',
      value: 'cod',
      
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
  }
}
