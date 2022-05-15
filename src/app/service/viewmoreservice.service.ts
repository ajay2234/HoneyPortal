import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { loadavg } from 'os';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewmoreserviceService {

  constructor(private afs:AngularFirestore) { }

  getCategory()
  {
   const Product=this.afs.collection("Product").valueChanges({idField:"product_id"});
   return Product;
  }

  getProductList() {
    return this.afs.collection<any>("Product").snapshotChanges()
      .pipe(map((item: any) => {
        const proData: any[] = []
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            proData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })
          })
        }
        return proData;
      }))
  }

  getCategoryList() {
    return this.afs.collection<any>("Category").snapshotChanges()
      .pipe(map((item: any) => {
        const catData: any[] = []
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            catData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })
          })
        }
        return catData;
      }))
  }

  getProductBycategory(catId: any) {
    console.log(catId)
    return this.afs.collection('Product', (ref) => ref.where("category_id",
    "==", catId))
    .valueChanges({ idField: "product_id" })
    }




  getProductById(product_id:any)
  {


    const Product = this.afs
    .doc<any>("Product/" + product_id)
    .valueChanges();

console.log(Product);
  
    return Product;




   }
   


   getsellerById(userId: any) {
 
     //console.log("here22");
    
     
     
    console.log(userId)
    return this.afs.collection('Customer', (ref) => ref.where("uid",
    "==", userId))
    .valueChanges({ idField: "customer_id" })
    }

   saveBooking(cartid: any,sellerDetails:any)
   {
     const cartdata={
      product_name:cartid.product_name,
      product_amount:cartid.product_amount,
      cat_name:cartid.cat_name,
      name:sellerDetails.name,
      quantity:cartid.quantity,
       totalamount:cartid.totalamount,
    //  email:sellerDetails.email,
      product_image:cartid.product_image,
      stutus:"lastBooking",
    
      customer_id:cartid.customer_id,
      Booking_date:cartid.Booking_date,
      product_id:cartid.product_id,
      sellerDetails:cartid.sellerDetails,


      

     }
     return this.afs.collection("Booking").add(cartdata);
   }




   getBookingById()
   {
    
     return this.afs.collection('Booking', (ref) => ref.where("stutus",
     "==", 'lastBooking'))
     .valueChanges({ idField: "booking_id" })
  }
}