import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportserviceService } from 'src/app/service/reportservice.service';

@Component({
  selector: 'app-customerwise',
  templateUrl: './customerwise.component.html',
  styleUrls: ['./customerwise.component.scss']
})
export class CustomerwiseComponent implements OnInit {

  stocklist: any[] = []
  totalamt=0;
  public cartlist : any[]=[];
  value: any[] = [];
  public instrumentlist : any[]=[];
  dailysales!:FormGroup
  // count=0
  constructor(private registration:ReportserviceService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
  this.registration.instrumentview12()
  .subscribe(res => {
  console.log("instrumentlist") 
  console.log(res) 
  this.instrumentlist = res;
  for(let i=0;i<=this.instrumentlist.length;i++){
  this.registration.getorderlistbyproduct12(this.instrumentlist[i].name).subscribe((data: any[]) => {
  this.cartlist.push(
  {
  "name":this.instrumentlist[i].name,
  "District":this.instrumentlist[i].District,

  // "product_image":this.instrumentlist[i].product_image, 
  "count":data.length
  })
  console.log(this.cartlist);
  }) 
  } 
  }
  )
  }}