import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { GoogleServiceService } from 'src/app/googleservice.service';


@Component({
  selector: 'app-guest-master',
  templateUrl: './guest-master.component.html',
  styleUrls: ['./guest-master.component.scss']
})
export class GuestMasterComponent implements OnInit {

  appUser!: firebase.User;
  constructor(private authService: GoogleServiceService,
  private router: Router
  ) {

  }

  ngOnInit(): void {
    this.authService.appUser$.subscribe((appUser : any) => (this.appUser=appUser));
  }
  login() {
  this.authService.login();
  }}