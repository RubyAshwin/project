import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { CategoryPage } from '../category/category'




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  login(){
    console.log("Username:"+this.username);
    
    console.log ("Password:"+this.password);
    
    this.navCtrl.push(CategoryPage);
    
    
    
      }
    
      goRegister(){
        this.navCtrl.push(RegisterPage)
      }
}
