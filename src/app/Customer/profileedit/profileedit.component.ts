import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/customerservice.service';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss']
})
export class ProfileeditComponent implements OnInit {

  districtlist:any[]=[];
  editpersonalinfo!: FormGroup;
 res:any;
  locationlist:any[]=[];
  District=new FormControl('');
  constructor(private fb:FormBuilder,private route:ActivatedRoute,
    private router:Router,private studentservice:CustomerserviceService){ }

  ngOnInit(): void {
    this.editpersonalinfo=this.fb.group({
      name:[''],
      housename:[''] ,
      District:this.District,
      pincode:[''],
      phone:[''] ,
      place_name:[''],
      
      uid:localStorage.getItem("userid") 
    })
    this.studentservice.getcustomerdetails(this.editpersonalinfo.value.uid)
  .subscribe((res:any) =>{
  this.res=res[0]
  this.editpersonalinfo.patchValue(res[0]);

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
  onsubmit(){
    this.studentservice.updatestudentdata(this.editpersonalinfo.value,this.res.customerid)
    .then(res =>{
    console.log(res)
    this.router.navigate(['customermaster/customerhome'])
    })}
  
  onChange(event: any) {
    this.studentservice.viewallLocationbydistrict(this.District.value)
    .subscribe((data: any[]) => ( 
      this.locationlist = data)); 
  }

}
