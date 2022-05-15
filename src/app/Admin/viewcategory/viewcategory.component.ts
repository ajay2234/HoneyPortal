import { Component, OnInit } from '@angular/core';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.scss']
})
export class ViewcategoryComponent implements OnInit {
public categorylist: any[]=[]
  constructor(
    private router:Router,
      private catservice:CategoryserviceService
  ) { }

  ngOnInit(): void {
    this.catservice.getcategory().subscribe(res =>{
      console.log(res)
      this.categorylist=res;
      })
  }
  delete(categoryId:any){
    if(confirm("Are u sure?")){
      this.catservice.deletecategory(categoryId).then(
        ()=>
        (error:any)=>console.error(error)
        )
        }
        }
        addnew(){
          // this.router.navigate"['/']"
        }        


        
}
