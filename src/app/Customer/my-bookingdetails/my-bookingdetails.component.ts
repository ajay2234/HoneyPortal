import { Component, OnInit } from '@angular/core';
import { OrderdetailsserviceService } from 'src/app/service/orderdetailsservice.service';

@Component({
  selector: 'app-my-bookingdetails',
  templateUrl: './my-bookingdetails.component.html',
  styleUrls: ['./my-bookingdetails.component.scss']
})
export class MyBookingdetailsComponent implements OnInit {
  product_id:any;
  public OrderList : any;
  customerid:any
  public memberdetails:any[]=[] 
  public AcceptList:any
  constructor(private orderservice:OrderdetailsserviceService) { }

  ngOnInit(): void {
    this.customerid=localStorage.getItem("userid")
    console.log(this.customerid);


   // this.getProduct();
    this.getOrderdetails();
}
getOrderdetails(){

  console.log(this.customerid);
  this.orderservice.getOrderdetails(this.customerid).then((data : any[])=>{
    console.log("hyy");
    
    console.log(data)
    this.OrderList=data});
  // console.log(this.OrderList)
}
// getProduct(){
//   this.orderservice.getProductList(this.customerid).subscribe((data : any[])=>(this.OrderList=data));
// }




Accept(Booking_Collectionid:any){  
//   console.log("id");
  
//   console.log(Booking_Collectionid);
  
//   this.orderservice.getOrderdetails(this.customerid)
//   .then((data: any) => {  
//     console.log("daatat");
       
// console.log(data), 
//     this.memberdetails=data,
//     console.log("here");
    
//     console.log(this.memberdetails)
//     console.log("end");
    
    
//   })   ;                                                                                                           
  // this.orderservice.acceptbooking(Booking_Collectionid).then((data : any[])=>{
  //   this.AcceptList=data;
  //   console.log("Acceptrfef");
  //   console.log(this.AcceptList);
    
    
  //   if(this.AcceptList.length>0)
  //   {
  //     window.location.reload();
  //   }

  // })

  console.log("booking id");
  console.log(Booking_Collectionid);
  
  

  this.orderservice.acceptbooking(Booking_Collectionid).then((data : any)=>{
    console.log("hyy");
    
    console.log(data)
    this.AcceptList=data
  if(this.AcceptList="true")
  {
    console.log("succes");
    
    window.location.reload();
  }
  
  });

  
  

}

Reject(Booking_Collectionid:any){  
//   this.orderservice.viewbookingbyid(Booking_Collectionid)
//   .subscribe((data: any[]) => (     
// console.log(data),
//     this.memberdetails=data))                                                                                                                              
//   this.orderservice.rejectbooking(this.memberdetails,Booking_Collectionid)
//   .then(() => { 
//   }) 
// this.orderservice.getOrderdetails(this.customerid)
//   .then((data: any) => {  
//     console.log("daatat");
       
// console.log(data), 
//     this.memberdetails=data,
//     console.log("here");
    
//     console.log(this.memberdetails)
//     console.log("end");
    
    
//   })   ;                                                                                                           
  // this.orderservice.rejectbooking(Booking_Collectionid) 
  // window.location.reload();

  this.orderservice.rejectbooking(Booking_Collectionid).then((data : any)=>{
    console.log("hyy");
    
    console.log(data)
    this.AcceptList=data
  if(this.AcceptList="true")
  {
    console.log("succes");
    
    window.location.reload();
  }
  
  });


}




}
