import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportserviceService } from 'src/app/service/reportservice.service';

@Component({
  selector: 'app-productreport',
  templateUrl: './productreport.component.html',
  styleUrls: ['./productreport.component.scss']
})
export class ProductreportComponent implements OnInit {

  public categorylist: any[]=[]
  count: any;
  constructor(
    private router:Router,
      private catservice:ReportserviceService
  ) { }

  ngOnInit(): void {
    this.catservice.getProduct().subscribe(res =>{
      console.log(res)
      this.categorylist=res;
      this.count=this.categorylist.length;
      })
  }
    


}