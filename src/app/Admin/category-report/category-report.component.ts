import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-category-report',
  templateUrl: './category-report.component.html',
  styleUrls: ['./category-report.component.scss']
})
export class CategoryReportComponent implements OnInit {

  public categorylist: any[]=[]
  count: any;
  constructor(
    private router:Router,
      private catservice:CategoryserviceService
  ) { }

  ngOnInit(): void {
    this.catservice.getcategory().subscribe(res =>{
      console.log(res)
      this.categorylist=res;
      this.count=this.categorylist.length;
      })
  }
    


}
