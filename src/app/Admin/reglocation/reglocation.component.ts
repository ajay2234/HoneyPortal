import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationserviceService } from 'src/app/service/locationservice.service';
@Component({
  selector: 'app-reglocation',
  templateUrl: './reglocation.component.html',
  styleUrls: ['./reglocation.component.scss']
})
export class ReglocationComponent implements OnInit {
  LocationForm!: FormGroup;
  savestatus=false;
  districtList:any[]=[];
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private locationservice:LocationserviceService
  ) { }

  ngOnInit(): void {
    this.LocationForm=this.fb.group({
      district_id :[''],
      place_name :['',Validators.required],
      pincode :['',Validators.required]
    })

    this.locationservice.getdistrictList().subscribe((data: any) => {
      this.districtList = data;
      console.log(data)
    });
  


  }
  savePlace(){
  if(!this.LocationForm.valid){
this.savestatus=true;
return
  }
  else{
  

  this.locationservice.savePlace(this.LocationForm.value).then(()=>
  {
    this.router.navigate(["/adminmaster/viewlocation"]);
  });
}
  }
}
  

