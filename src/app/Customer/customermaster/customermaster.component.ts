import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { GoogleServiceService } from 'src/app/googleservice.service';

@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent implements OnInit {

  appUser!: firebase.User;
  constructor(private authService: GoogleServiceService,
  private router: Router
  ) {

    this.authService.appUser$.subscribe((appUser : any) => (this.appUser=appUser));

  }

  ngOnInit(): void {
    
  }
  logout(){
    this.authService.logout();
  }
}