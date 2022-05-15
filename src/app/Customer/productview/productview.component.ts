import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustproductserviceService } from 'src/app/service/custproductservice.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {
  categoryList:any[]=[];
  productList : any[]=[];
  products:any[]=[];
  locationList:any[]=[];
  customerproductform!: FormGroup;
  Category_Control = new FormControl('');
  Location_Control = new FormControl('');
  customerid:any
  constructor(private router:Router,private viewproductView:CustproductserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.customerid=localStorage.getItem("userid")
    this.getProduct();
    this.viewproductView.getCategoryList().subscribe((data: any) => {
      this.categoryList = data;
      console.log(data)
    });
    this.viewproductView.getLocationList().subscribe((data: any) => {
      this.locationList = data;
      console.log(data)
    });
  }

  getProduct()
  {
    this.viewproductView.getCategory(this.customerid).subscribe((data : any[])=>(this.productList=data));
  }

  onChange(event: any) {
    console.log(this.Category_Control.value)
    this.viewproductView.getProductBycategory(this.Category_Control.value)
    .subscribe(res => {
    console.log(res)
    this.productList=[];
    this.productList = res;
    })
    }
   
    onChangelocation(event: any) {
      console.log(this.Location_Control.value)
      this.viewproductView.getProductByLocation(this.Location_Control.value)
      .then(res => {
      console.log(res)
      this.products=res;
      for(let i=0;i<this.products.length;i++)
      {
        if(this.products[i].location_id==this.Location_Control.value)
        this.productList.push
        {
          product_name:this.products[i].product_name;
          product_image:this.productList[i].product_image
        }
      }
      })
      }
    }