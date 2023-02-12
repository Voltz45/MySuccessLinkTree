import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MySuccessLinkTree';
  urls: any = {
    list_url: [
      {
        url: ""
      },
      {
        url: ""
      },
      {
        url: ""
      },
      {
        url: ""
      },
      {
        url: ""
      },
      {
        url: ""
      },
      {
        url: ""
      }
    ]
  }

  navItems = [
    "Student",
    "Institution",
    "About Us",
    "Why Mysuccess",
    "Contact Us"
  ]

  constructor(
    private db: AngularFirestore,
    private dialog: MatDialog
  ) {
    this.db.collection('hyperlink').snapshotChanges()
      .subscribe(response => {
        this.urls = response[0].payload.doc.data();
      })
  }

  ngOnInit() {
    this.headerEffect()
  }

  headerEffect() {
    window.addEventListener('scroll', function () {
      navbarScroll();
    });

    function navbarScroll() {
      const y = window.scrollY;
      const header = document.getElementsByClassName('first-container')[0];
      const logo = document.getElementsByClassName('logo-container')[0];


      if (y > 10) {
        header.classList.add('small');
        logo.classList.add('hide');
      } else if (y < 10) {
        header.classList.remove('small');
        logo.classList.remove('hide');
      }
    }
  }
}
