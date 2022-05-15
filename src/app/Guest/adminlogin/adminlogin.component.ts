import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestserviceService } from 'src/app/service/guestservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  AdminLoginForm!: FormGroup;
  username = new FormControl('');
  password=new FormControl('');
  Adminloginlist:any[]=[];
  constructor(private fb:FormBuilder,private router:Router,private loginservice:GuestserviceService ) { }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
      username: [''],
      password: [''],
    
    })
  
  }
  submit(){
    console.log(this.username.value)
    this.loginservice.AdminLogin(this.username.value, this.password.value)
    .subscribe(res => {
    console.log(res)
    this.Adminloginlist = res;
    if(this.Adminloginlist.length>0)
    {
    this.router.navigate(['/adminmaster/adminhome']);
    }
    else{alert("Invalid User name or Password")}
    })  
  }
}
