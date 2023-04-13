import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    {
      label: "Student",
      path: "/",
      disabled: true
    },
    {
      label: "Institution",
      path: "https://my-success-2022.firebaseapp.com/#/",
      disabled: false
    },
    {
      label: "About Us",
      path: "/about-us",
      disabled: false
    },
    {
      label: "Why Mysuccess",
      path: "/why-mysuccess",
      disabled: false
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      disabled: false
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    const className = document.querySelector('.navbar-content');
    const closeNavbarButton = document.querySelector('.close-navbar-button-container');
    const navItem = document.querySelector('.nav-item-container');
    const navIcon = document.querySelector('.navbar-icon-container');

    if (!className?.classList.contains('show-navbar')) {
      className?.classList.add('show-navbar');
      closeNavbarButton?.classList.add('show-navbar');
      navItem?.classList.add('show-navbar');
      navIcon?.classList.add('show-navbar');
    } else {
      className?.classList.remove('show-navbar');
      closeNavbarButton?.classList.remove('show-navbar');
      navItem?.classList.remove('show-navbar');
      navIcon?.classList.remove('show-navbar');
    }
  }
}
