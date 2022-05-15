import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationserviceService } from 'src/app/service/locationservice.service';

@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.component.html',
  styleUrls: ['./viewlocation.component.scss']
})
export class ViewlocationComponent implements OnInit {
public locationlist: any[]=[]
  constructor(
    private router:Router,
    private locationservice:LocationserviceService
  ) { }

  ngOnInit(): void {
    this.locationservice.getPlace().then((res: any[]) =>{
      console.log(res)
      this.locationlist=res;
      })
  }
  delete(place_id:any){
    if(confirm("Are u sure?")){
    this.locationservice.deleteplace(place_id).then(
    ()=>
    (error:any)=>console.error(error)
    )
    }
    }
  }


