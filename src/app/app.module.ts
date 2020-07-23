import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyDzSJ_7frjPfKfFgbUPMJhsle77Cwj2Qdc",
  authDomain: "todoapp-f3c8a.firebaseapp.com",
  databaseURL: "https://todoapp-f3c8a.firebaseio.com",
  projectId: "todoapp-f3c8a",
  storageBucket: "todoapp-f3c8a.appspot.com",
  messagingSenderId: "884588690130",
  appId: "1:884588690130:web:7652e1bfcfbda524088b0b",
  measurementId: "G-XF0Z9ERF2L"
});
firebase.firestore().settings({ timestampsInSnapshots:true});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
