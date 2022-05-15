import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-district-report',
  templateUrl: './district-report.component.html',
  styleUrls: ['./district-report.component.scss']
})
export class DistrictReportComponent implements OnInit {
  public districtlist : any[]=[];
  count: any;
  
  constructor(private categoryservice:CategoryserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getdistrict()
  }

  getdistrict()
  {
    this.categoryservice.getdistrict().subscribe((data : any[])=>{this.districtlist=data
      this.count=this.districtlist.length;
    });
    
  }

 
}
