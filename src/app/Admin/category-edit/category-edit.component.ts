import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  editcategory!:FormGroup
  category_id:any
  constructor(private fb:FormBuilder,
    private categoryservice: CategoryserviceService,
    private route:ActivatedRoute,
    private router: Router ) 
    {
      route.params.subscribe(catid =>{this.category_id=catid['id'];})
     }

  ngOnInit(): void {
    this.editcategory=this.fb.group({
      catname:[''],
      Description: ['']
    }) 


    if(this.category_id){
      console.log(this.category_id) 
       this.categoryservice.getCategoryById(this.category_id)
       .subscribe((result: any)=>{
       if(result){
       this.editcategory.patchValue(result);
      
     }
     })
   }
   else{
   alert("failed");
   }

  }
edit()
{
  this.categoryservice.updateProduct(this.category_id,this.editcategory.value).then(()=>{
    this.router.navigate(["/adminmaster/categoryview"]);
    console.log(this.editcategory.value)
  });
}
}

