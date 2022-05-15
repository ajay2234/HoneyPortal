import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewmoreserviceService } from 'src/app/service/viewmoreservice.service';

@Component({
  selector: 'app-viewmoreproduct',
  templateUrl: './viewmoreproduct.component.html',
  styleUrls: ['./viewmoreproduct.component.scss']
})
export class ViewmoreproductComponent implements OnInit {
  product_amount = new FormControl('');
  quantity=new FormControl('');


  product_id:any;
  public productList : any;
  userId:any;
  public categoryList: any[] = [];
  public sellerDetails: any;

  viewmoreproductform: any;
  totalamount: any;
  price:any;
  mydate:any;
  shop_id:any
 
  
  

  constructor( private viewmoreSer:ViewmoreserviceService,
    private route:ActivatedRoute,private fb:FormBuilder,private router:Router,private datepipe:DatePipe)
    
    { 
      route.params.subscribe(proid =>{this.product_id =proid['id'];})
      route.params.subscribe(proid =>{this.shop_id =proid['id2'];})

     

    }

    ngOnInit(): void {
    this.mydate=this.datepipe.transform(new Date().toLocaleDateString(),'yyyy-MM-dd')
    console.log(this.mydate);

   
      this.viewmoreproductform=this.fb.group({
       
        product_name:[''],
        product_amount:[''],
        cat_name:[''],
        name:[''],
        quantity:[''],
         totalamount:[''],
        email:[''],
        product_image:[''],
        product_count:[''],
        Booking_date:this.mydate,
        product_id:this.product_id,
        sellerDetails:this.shop_id,
        
       
      
        customer_id:localStorage.getItem("userid"),
      });
      
      
      console.log(this.product_amount)
      
      
      this.viewmoreSer.getProductById(this.product_id).subscribe((res: any) =>{
        console.log(res);
        this.viewmoreproductform.patchValue(res);
        
        this.productList=res; 
       
              // this.shop_id=this.productList.uid
              // console.log("::::shop id");
              // console.log(this.shop_id);
              
                  

        this.userId=this.productList.uid
        console.log("::::::::uuuu");
        console.log(this.userId);
        
        console.log(console.log(typeof(this.userId)))
        this.sellerid();


      }
      );

    }
    onSubmit(seller_id: any){


console.log(seller_id);

    
      this.viewmoreSer.saveBooking(this.viewmoreproductform.value,this.sellerDetails).then(()=>
        {
          console.log(this.viewmoreproductform)
          
          alert("Booking successfully completed")
          this.router.navigate(["customermaster/mybookingdetails"]);
        });
      }
    

 

    onChange($event:any){
      
      if(this.productList.product_count<this.viewmoreproductform.value.quantity){
        alert("Quantity Exceeded")
        this.viewmoreproductform.get("quantity")?.setValue('')
        this.viewmoreproductform.get("totalamount")?.setValue('')
      }
      else{
        this.totalamount=this.viewmoreproductform.value.quantity* this.productList.product_amount
 console.log(this.totalamount)
this.viewmoreproductform.get("totalamount")?.setValue(this.totalamount)


      }
 


    }

    sellerid(){
      this.viewmoreSer.getsellerById(this.userId).subscribe((res:any) =>{ 
        this.sellerDetails=res
        this.viewmoreproductform.patchValue(res)
      
        
        this.sellerDetails=Object.assign({}, ...this.sellerDetails)

        console.log("seller Detailskddnfk");
        
        console.log(this.sellerDetails)
        }
        );
    }


}