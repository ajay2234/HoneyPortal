import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsserviceService {

  constructor(private afs:AngularFirestore) { }


//   getBookingById()
//   {
   
//     return this.afs.collection('Booking', (ref) => ref.where("stutus",
//     "==", 'lastBooking'))
//     .valueChanges({ idField: "booking_id" })
//  }

 getBookingById(customerid:any)
 {
   console.log("customer id");
   console.log(customerid);
   
   
  const Product=this.afs.collection("Booking", (ref) => ref.where("customer_id",
  "==", customerid))
  .valueChanges({idField:"booking_id"});
  return Product;
 }

//  getOrderdetails()
// {
//   const Product=this.afs.collection("Booking", (ref) => ref.where("customer_id",
//   "==", customerid))
//   .valueChanges({idField:"booking_id"});
//   return Product;
// }
getProduct()
  {
   const Product=this.afs.collection("Product").valueChanges({idField:"product_id"});
   return Product;
  }

getOrderdetails(customerid:any) {
  // console.log(customerid);
  // console.log("nnnn");
  
  
  // return new Promise<any[]>((resolve, reject) => {
  //   const Location = this.afs
  //  .collection<any>("Booking",(ref) => ref.where("customer_id","==",customerid))
  //   .valueChanges({ idField: "booking_id" })
  //   .subscribe(prodRes => {
  //     this.getBookingListByUser(customerid).subscribe(res => {
  //       prodRes.forEach(el => {
  //         el.cat_name = res.find(el1 => el1.product_name === el.product_name)?.cat_name
  //         el.customer_id = res.find(el1 => el1.product_name === el.product_name)?.customer_id
  //         // el.quantity = res.find(el1 => el1.product_name === el.product_name)?.quantity
  //         el.name = res.find(el1 => el1.product_name === el.product_name)?.name

  //         //el.name=this.getBookingList().subscribe(result=>
  //         //   {
  //         // res.forEach(l=>{
  //         //       el.name=result.find(l1=>l1.customer_id===el.customer_id)?.name
  //         //       el.product_amount=result.find(l1=>l1.customer_id===el.customer_id)?.product_amount
  //         //       el.quantity=result.find(l1=>l1.customer_id===el.customer_id)?.quantity
  //         //     })
  //         //   })
  //           el.booking_name=this.getCustomerListByUser().subscribe(result=>
  //             {
  //               res.forEach(l=>{
  //                 el.customer_name=result.find(l1=>l1.uid===el.customer_id)?.name
  //                 el.Address=result.find(l1=>l1.uid===el.customer_id)?.housename
  //                 el.Number=result.find(l1=>l1.uid===el.customer_id)?.phone
  //               })
  //             })
  //       })
  //        resolve(prodRes)
  //      })
  //   })

  //   //console.log(Location)
  // })






  
  
  return new Promise<any[]>((resolve, reject) => {
    const Location = this.afs
    .collection<any>("Booking", (ref) => ref.where("sellerDetails", "==", customerid))      
    .valueChanges({ idField: "booking_id" })
    .subscribe(prodRes => {
      this.getBookingListByUser().subscribe(res => {
        prodRes.forEach(el => {
          el.product_id = res.find(el1 => el1.id === el.product_id)?.product_id
        
          
        })
        resolve(prodRes)
      })
      this.getCustomerListByUser().subscribe(res => {
        prodRes.forEach(el => {
          el.name = res.find(el1 => el1.uid === el.customer_id)?.name
          el.housename = res.find(el1 => el1.uid === el.customer_id)?.housename
          el.phone = res.find(el1 => el1.uid === el.customer_id)?.phone



        })
        resolve(prodRes)
      })
    })
  })

}




getBookingListByUser()
{
  return this.afs.collection<any>("Product").snapshotChanges()
  .pipe(map((item:any)=>{
    const catData: any[]=[]
    if (item)
    {
      item.forEach((el:any)=>{
        catData.push({
          id:el.payload.doc.id,
          ...el.payload.doc.data()
        })
      })
    }

    console.log(catData)
    return catData;
  }))
}

getCustomerListByUser()
{
  return this.afs.collection<any>("Customer").snapshotChanges()
  .pipe(map((item:any)=>{
    const catData: any[]=[]
    if (item)
    {
      item.forEach((el:any)=>{
        catData.push({
          id:el.payload.doc.id,
          ...el.payload.doc.data()
        })
      })
    }

    console.log(catData)
    return catData;
  }))
}
getBookingList()
{
  return this.afs.collection<any>("Booking").snapshotChanges()
  .pipe(map((item:any)=>{
    const catData: any[]=[]
    if (item)
    {
      item.forEach((el:any)=>{
        catData.push({
          id:el.payload.doc.id,
          ...el.payload.doc.data()
        })
      })
    }

    console.log(catData)
    return catData;
  }))
}


acceptbooking(bookingid:any){
//   const productData = {
//     cat_name: bookingdetails.cat_name,
//     customer_id: bookingdetails.customer_id,
//     name: bookingdetails.name,
//     product_amount: bookingdetails.product_amount,
//     product_image: bookingdetails.product_image,
//     product_name: bookingdetails.product_name,
//     quantity: bookingdetails.quantity,
//     totalamount: bookingdetails.totalamount,
//     stutus:"Accepted",
//   }
//   console.log("!");
  
//   console.log(bookingdetails);
  
//   console.log("service ddatatataat");
  
//   console.log(productData)
//  // debugger
//   return this.afs.doc("Booking/" + "McmWj5r9M7hZy5Oybwkk").update(productData);

const Product=this.afs.doc(`Booking/${bookingid}`).update({stutus:"Approved"});
const Product2 =true;
return Product

 }
 rejectbooking(bookingid:any){
  // const productData = {
  // Customer_Name : bookingdetails.Customer_Name,
  // Con_Number: bookingdetails.Con_Number,
  // Phone_Number: bookingdetails.Phone_Number,
  // Connection_Type: bookingdetails.Connection_Type,
  // Booking_date: bookingdetails.Booking_date,
  // uid: bookingdetails.uid,
  // Admin_status:"Rejected",
  // }
  
  // return this.afs.doc("Booking/" +bookingid).update(productData);


  const Product= this.afs.doc(`Booking/${bookingid}`).update({stutus:"Rejected"});
  const product2=true;
  return Product

 }


 viewbookingbyid(bookingid:any){ 
 
   
  console.log(bookingid)



const productData = this.afs.doc<any>("Booking/" + bookingid).valueChanges();
   console.log("hhhhiii");
   
  
   console.log(productData)
   //debugger
 return productData;





}

}