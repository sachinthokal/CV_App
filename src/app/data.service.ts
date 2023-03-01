import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  name: String;
  address: String = '';
  contact: Number;
  email: String = '';
  dob: Date;
  status: String = '';
  nation: String = '';
  lang: String;

  constructor(
    name: String,
    address: String,
    contact: Number,
    email: String,
    dob: Date,
    status: String,
    nation: String,
    lang: String
  ) {
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.email = email;
    this.dob = dob;
    this.status = status;
    this.nation = nation;
    this.status = status;
    this.lang = lang;
  }
}
