import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from '../pages/register/register';
import { CategoryPage} from '../pages/category/category';
import {LoginPage} from '../pages/login/login';
import {DoctorPage } from '../pages/doctor/doctor';
import {PrescriptionPage} from '../pages/prescription/prescription';
import { ReportsPage } from '../pages/reports/reports';
import {FirstPage} from '../pages/first/first';
import {SummaryPage} from '../pages/summary/summary'
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    CategoryPage,
    LoginPage,DoctorPage,PrescriptionPage,ReportsPage,FirstPage ,SummaryPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    CategoryPage,
    LoginPage,DoctorPage,PrescriptionPage,ReportsPage,FirstPage,SummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
