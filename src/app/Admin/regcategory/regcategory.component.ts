import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-regcategory',
  templateUrl: './regcategory.component.html',
  styleUrls: ['./regcategory.component.scss']
})
export class RegcategoryComponent implements OnInit {
  regcategory!:FormGroup
  savestatus=false;
  constructor(private fb:FormBuilder,
    private categoryservice: CategoryserviceService,
    private route:ActivatedRoute,
    private router: Router   ){}

  ngOnInit () 
  {
    
      this.regcategory=this.fb.group({
        catname:['',Validators.required],
        Description: ['',Validators.required]
      }) 
    }
    submit()
    {
      if(!this.regcategory.valid)
      {
        this.savestatus=true
        return
      }
      else
      {

    
      this.categoryservice.AddCategory(this.regcategory.value).then(() => {
        this.router.navigate(['/adminmaster/categoryview'])
        });
      } 
    }
  } 