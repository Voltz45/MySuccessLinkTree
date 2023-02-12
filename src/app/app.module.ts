import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {WhyMysuccessComponent} from './why-mysuccess/why-mysuccess.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SharedModule} from "./default/shared.module";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AutosizeModule} from "ngx-autosize";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import { TncComponent } from './dialog/tnc/tnc.component';
import { PpComponent } from './dialog/pp/pp.component';
import { ConComponent } from './dialog/con/con.component';

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
    LandingPageComponent,
    ContactUsComponent,
    WhyMysuccessComponent,
    AboutUsComponent,
    TncComponent,
    PpComponent,
    ConComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AppRoutingModule, // firestore
    RouterModule,
    SharedModule,
    MatInputModule,
    ReactiveFormsModule,
    AutosizeModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
