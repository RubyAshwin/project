import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

info
  constructor(public navCtrl: NavController ,public navparams: NavParams) {
this.info=this.navparams.get('cday')
  }

}
