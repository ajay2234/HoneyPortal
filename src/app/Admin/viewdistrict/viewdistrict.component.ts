import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryserviceService } from 'src/app/service/categoryservice.service';

@Component({
  selector: 'app-viewdistrict',
  templateUrl: './viewdistrict.component.html',
  styleUrls: ['./viewdistrict.component.scss']
})
export class ViewdistrictComponent implements OnInit {

  public districtlist : any[]=[];
  
  constructor(private categoryservice:CategoryserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getdistrict()
  }

  getdistrict()
  {
    this.categoryservice.getdistrict().subscribe((data : any[])=>(this.districtlist=data));
    
  }

  onAdd(){
    this.router.navigate(['/adminmaster/regdistrict'])

  }
  onEdit(district_id:any){
    this.router.navigate(['/adminMaster/editCategory',district_id])
  }
  onDelete(district_id:any)
  {
    if (confirm("Are you sure you want to delete this district detail??")){
      this.categoryservice.deletedistrict(district_id).then(
        ()=>{
          this.getdistrict();
        },
        (error: any)=> console.error(error)
      );
    }
  }
}