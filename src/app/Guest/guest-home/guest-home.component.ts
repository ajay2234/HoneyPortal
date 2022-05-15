import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleServiceService } from 'src/app/googleservice.service';
import firebase from "firebase/compat/app"

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss']
})
export class GuestHomeComponent implements OnInit {
  appUser!: firebase.User;
  constructor(private authService: GoogleServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.appUser$.subscribe((appUser : any) => (this.appUser=appUser));
  }
  login() {
    this.authService.login();
  
    
    }}


