import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';
import { FormBuilder, FormGroup, Validators ,} from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-regdistrict',
  templateUrl: './regdistrict.component.html',
  styleUrls: ['./regdistrict.component.scss']
})
export class RegdistrictComponent implements OnInit {
  DistrictForm!:FormGroup;
  savestatus=false;
  constructor(
    private router:Router,
    private catservice:CategoryserviceService,
private fb:FormBuilder,
private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.DistrictForm = this.fb.group({
      dist_name : ['',Validators.required]
      })
  }
  onsubmit() 
    {
      if(!this.DistrictForm.valid)
      {
        this.savestatus=true
        return
      }
      else
      {
    this.catservice.districtadd(this.DistrictForm.value).then(res => {
     this.router.navigate(['adminmaster/viewdistrict'])
    })
}
  }
}

