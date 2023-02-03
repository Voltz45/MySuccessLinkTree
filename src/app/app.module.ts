import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CsComponent } from './component/cs/cs.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

const config = {
  apiKey: "AIzaSyDG1f3ZAMKaWKgFlry7YsRE0m0SyCDYraA",
  authDomain: "my-success-2022.firebaseapp.com",
  projectId: "my-success-2022",
  storageBucket: "my-success-2022.appspot.com",
  messagingSenderId: "49289699269",
  appId: "1:49289699269:web:23694d5059813831d335ac"
};


@NgModule({
  declarations: [
    AppComponent,
    CsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
