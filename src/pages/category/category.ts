import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { DoctorPage } from '../doctor/doctor';





@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  items;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
    
'ACCIDENT AND EMERGENCY',
'ANAESTHESIA',
'ANATOMY',
'BIOCHEMISTRY',
'BIOENGINEERING',
'BIOSTATISTICS',
'DIETARY',
'DIRECTORATE',
'E.N.T',
'ELECTRICAL',
'ENDOCRINOLOGY',
'FAMILY MEDICINE',
'FORENSIC MEDICINE',
'GASTROENTEROLOGY',
'GENERAL PATHOLOGY',
'UROLOGY'


    ];

    
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(DoctorPage)
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}