import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrderdetailsserviceService } from 'src/app/service/orderdetailsservice.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  product_id:any;
  public bookingList : any;
  customerid:any;
  mydate:any;
  

  constructor(private orderservice:OrderdetailsserviceService,private datepipe:DatePipe) { }

  ngOnInit(): void {
    this.customerid=localStorage.getItem("userid")
    console.log(this.customerid);


    this.getProduct();
}
getProduct(){

  console.log(this.customerid);
  this.orderservice.getBookingById(this.customerid).subscribe((data : any[])=>{this.bookingList=data
  
  console.log(this.bookingList);
  
  });
}


}
