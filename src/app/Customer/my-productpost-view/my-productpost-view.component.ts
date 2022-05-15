import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustproductserviceService } from 'src/app/service/custproductservice.service';

@Component({
  selector: 'app-my-productpost-view',
  templateUrl: './my-productpost-view.component.html',
  styleUrls: ['./my-productpost-view.component.scss']
})
export class MyProductpostViewComponent implements OnInit {

  categoryList:any[]=[];
  productList : any[]=[];
  customerproductform!: FormGroup;
  Category_Control = new FormControl('');
  customerid:any
  constructor(private router:Router,private viewproductView:CustproductserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.customerid=localStorage.getItem("userid")
    
    
    console.log(this.customerid);
    
    this.viewproductView.getCategoryList().subscribe((data: any) => {
      this.categoryList = data;
      
      
      console.log(data)
    });
    this.getProduct();
  }
  getProduct()
  {
    
    
    console.log(this.customerid);
    
    this.viewproductView.getProduct(this.customerid).subscribe((data : any[])=>(this.productList=data));
  }


  onChange(event: any) {
    console.log(this.Category_Control.value)
    this.viewproductView.getProductBycategory(this.Category_Control.value)
    .subscribe(res => {
    console.log(res)
    this.productList = res;
    })
    }

    onAdd(){
      this.router.navigate(['/customermaster/regproduct'])

    }

    
      onDelete(district_id:any)
      {
        if (confirm("Are you sure you want to delete this Product detail??")){
          this.viewproductView.deletedProduct(district_id).then(
            ()=>{
              this.getProduct();
            },
            (error: any)=> console.error(error)
          );
        }
      
    }

    onEdit(product_id:any){
      this.router.navigate(['/customermaster/editproduct',product_id])

    }

}
 
    
    


  
