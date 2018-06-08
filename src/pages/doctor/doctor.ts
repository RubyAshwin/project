import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {SummaryPage} from '../summary/summary'



@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirm1() {
  this.navCtrl.push(SummaryPage)
  }

}
