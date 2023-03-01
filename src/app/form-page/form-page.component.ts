import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Uname: string = 'Sachin';
  Pass: string = '12345';
  Mob: number = 88171399;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    nation: new FormControl('', [Validators.required]),
    lang: new FormControl('', [Validators.required]),
  });

  onFormSubmit() {
    console.log('Name ' + this.userForm.value['name']);
    console.log(this.userForm.value);
    console.log('Validation Status: ' + this.userForm.status);
  }
}
