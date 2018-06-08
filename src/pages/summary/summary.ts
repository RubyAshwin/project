
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home'



@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {

day:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

appConfirm(){
alert('your appointment booked on ' +this.day )
  this.navCtrl.push(HomePage,{
    'cday': this.day
  })
}

}
