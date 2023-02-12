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
      path: "/"
    },
    {
      label: "Institution",
      path: "/"
    },
    {
      label: "About Us",
      path: "/about-us"
    },
    {
      label: "Why Mysuccess",
      path: "/why-mysuccess"
    },
    {
      label: "Contact Us",
      path: "/contact-us"
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
