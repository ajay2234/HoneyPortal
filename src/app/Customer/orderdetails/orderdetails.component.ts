import { Component, OnInit } from '@angular/core';
import { OrderdetailsserviceService } from 'src/app/service/orderdetailsservice.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class MyBookingdetailsComponent implements OnInit {

  product_id:any;
  public bookingList : any;
  customerid:any

  constructor(private orderservice:OrderdetailsserviceService) { }

  ngOnInit(): void {
    this.customerid=localStorage.getItem("userid")
    console.log(this.customerid);


    this.getProduct();
}
getProduct(){

  console.log(this.customerid);
  this.orderservice.getBookingById(this.customerid).subscribe((data : any[])=>(this.bookingList=data));
}


}
