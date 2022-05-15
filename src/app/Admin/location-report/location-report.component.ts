import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationserviceService } from 'src/app/service/locationservice.service';

@Component({
  selector: 'app-location-report',
  templateUrl: './location-report.component.html',
  styleUrls: ['./location-report.component.scss']
})
export class LocationReportComponent implements OnInit {

  public locationlist: any[]=[]
  count: any;
  constructor(
    private router:Router,
    private locationservice:LocationserviceService
  ) { }

  ngOnInit(): void {
    this.locationservice.getPlace().then((res: any[]) =>{
      console.log(res)
      this.locationlist=res;
      this.count=this.locationlist.length;
      })
  }
  
}
