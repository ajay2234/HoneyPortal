import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationserviceService } from 'src/app/service/locationservice.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrls: ['./editlocation.component.scss']
})
export class EditlocationComponent implements OnInit {
  locationeditform!: FormGroup;
  locationlist: any[] = [];
  place_id: any;
  districtlist: any[] = [];

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private locationservice:LocationserviceService
  ) {route.params.subscribe(catid =>{this.place_id=catid['id'];}) }

  ngOnInit(): void {
    this.locationeditform = this.fb.group({
      district_id: [''],
      place_name: [''],
      })
  

  this.locationservice.getdistrictList().subscribe((data: any) => {
    this.districtlist = data;
    console.log(data)
    });

    this.locationservice.getPlace().then((data: any) =>{
      this.locationlist = data;
      console.log(this.locationlist)
      });

      if(this.place_id){
       console.log(this.place_id) 
        this.locationservice.getlocationById(this.place_id)
        .subscribe((result: any)=>{
        if(result){
        this.locationeditform.patchValue(result);
       
      }
      })
    }
    else{
    alert("failed");
    }
    }
    
    
    edit()
{
this.locationservice.updateProduct(this.place_id,this.locationeditform.value).then(()=>{
  this.router.navigate(["/adminmaster/viewlocation"]);
  console.log(this.locationeditform.value)
});
}
onChange(event: any) {
console.log(this.locationeditform.value)
this.locationservice.getlocationById(this.locationeditform.value.dname)
.subscribe(res => {
console.log(res)
this.locationlist = res;
})
  }

}
