import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';





  @Component({
    selector: 'page-first',
    templateUrl: 'first.html',
  })
  export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  first() {
   this.navCtrl.push(LoginPage)
  }

}