// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-reciept',
//   templateUrl: './reciept.component.html',
//   styleUrls: ['./reciept.component.scss']
// })
// export class RecieptComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
    
//     this.receiptform=this.fb.group({
     
//       product_name:[''],
//       product_amount:[''],
//       cat_name:[''],
//       name:[''],
//       quantity:[''],
//        totalamount:[''],
//       email:[''],
//       product_image:[''],
    
//       customer_id:localStorage.getItem("userid"),
    
//     });
    
//     //console.log(this.product_amount)
    
    
//     this.viewmoreSer.getProductById(this.product_id).subscribe((res: any) =>{
//       console.log(res);
//       this.viewmoreproductform.patchValue(res);
      
//       this.productList=res; 

//       this.userId=this.productList.uid
//       console.log(console.log(typeof(this.userId)))
//       this.sellerid();


//     }
//     );

//   }
// }