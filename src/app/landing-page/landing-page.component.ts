import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TncComponent} from "../dialog/tnc/tnc.component";
import {PpComponent} from "../dialog/pp/pp.component";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTnc() {
    const dialogRef = this.dialog.open(TncComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openPp() {
    const dialogRef = this.dialog.open(PpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
