import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/customerservice.service';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-profilefill',
  templateUrl: './profilefill.component.html',
  styleUrls: ['./profilefill.component.scss']
})
export class ProfilefillComponent implements OnInit {
  districtlist:any[]=[];
  personalinfo!: FormGroup;
  public loading = true;
  public edit = true;
  locationlist:any[]=[];
  District=new FormControl('');
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private studentservice:CustomerserviceService){ }

  ngOnInit(): void {
    this.personalinfo=this.fb.group({
      name:[''],
      housename:[''] ,
      District:this.District,
      pincode:[''],
      phone:[''] ,
      place_name:[''],
      
      uid:localStorage.getItem("userid") 
    })
    this.studentservice.getstudentdetails(this.personalinfo.value.uid)
    .subscribe((res:any) =>{ 
      if(res)
      {
      this.loading = true;
      this.edit = false;
      this.personalinfo.patchValue(res[0]);
      }
      if(res==0)
      {
      this.loading = false;
      this.edit = true;
      this.personalinfo.patchValue(res[0]);
      }
      });
      this.studentservice.getdistrictlist()
      .subscribe((res:any) =>{ 
        this.districtlist = res;
        console.log(res)
      });
    
    this.studentservice.getlocationdetails()
    .subscribe((res:any) =>{ 
      this.locationlist = res;
      console.log(res)
    });
  }
 submit(){ 
    
  this.studentservice.registration(this.personalinfo.value)
  .then(res =>{
    console.log(res)
      this.router.navigate(['customermaster/customerhome']) 
  })}
  
  onChange(event: any) {

    this.studentservice.viewallLocationbydistrict(this.District.value)
    .subscribe((data: any[]) => {
      console.log("hhee");
      console.log(this.District.value);
      
      
      this.locationlist = data
  console.log(this.locationlist);
    
    
    }); 
  }

}