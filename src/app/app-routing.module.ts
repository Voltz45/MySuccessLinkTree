import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {WhyMysuccessComponent} from "./why-mysuccess/why-mysuccess.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'why-mysuccess',
    component: WhyMysuccessComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'landing-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
