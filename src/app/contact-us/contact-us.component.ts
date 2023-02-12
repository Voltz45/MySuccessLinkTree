import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import '../../assets/smtp.js'
import {MatDialog} from "@angular/material/dialog";
import {ConComponent} from "../dialog/con/con.component"; //file path may change →
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  msgFormControl = new FormControl('', []);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit() {
    Email.send({
      SecureToken : "0931fd20-6c9b-417f-9f93-6dd1fb2b5204",
      To : 'enquiry@mysuccess.com.my',
      From : "enquiry@mysuccess.com.my",
      Subject : "Contact us " + this.emailFormControl.value,
      Body : this.msgFormControl.value
    }).then(
      (message: any) => {
        console.log(message)
        this.openDialog('0ms', '0ms');
      }
    );
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ConComponent);
  }
}
