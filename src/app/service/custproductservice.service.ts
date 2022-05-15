import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustproductserviceService {

  constructor(private afs:AngularFirestore) { }

  getCategory(customerid:any)
  {
   const Product=this.afs.collection("Product", (ref) => ref.where("uid",
   "!=", customerid))
   .valueChanges({idField:"product_id"});
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
    return this.afs.collection<any>("Category",(ref)=>ref.orderBy("catname")).snapshotChanges()
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
  getLocationList() {
    return this.afs.collection<any>("Place_collection").snapshotChanges()
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
    
    const uid=localStorage.getItem("userid")
  //  console.log(uid)
    return this.afs.collection('Product', (ref) => ref.where("cat_name", "==", catId).where("uid", "!=", uid))
    .valueChanges({ idField: "product_id" })
    }


   

      getProductByLocation(place:any) {
  return new Promise<any[]>((resolve, reject) => {
    const Location = this.afs
    .collection<any>("Product")
    .valueChanges({ idField: "product_id" })
    .subscribe(prodRes => {
      this.getCustomerList(place).subscribe(res => {
        prodRes.forEach(el => {
          el.location_name = res.find(el1 => el1.uid === el.uid)?.location_id
        })
         resolve(prodRes)
       })
    })
  })

}
getCustomerList(place:any)
{
  return this.afs.collection<any>("Customer",(ref=>ref.where("location_id","==",place))).snapshotChanges()
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


  getProductById(product_id:any)
  {


    const Product = this.afs
    .doc<any>("Product/" + product_id)
    .valueChanges();

console.log(Product);
  
    return Product;
   }

   
   saveCart(cartid: any)
   {
     const cartdata=JSON.parse(JSON.stringify(cartid));
     return this.afs.collection("Cart").add(cartdata);
   }

   getProduct(customerid:any)
  {
    
   const Product=this.afs.collection("Product", (ref) => ref.where("uid",
   "==", customerid))
   .valueChanges({idField:"product_id"});
   return Product;
  }
  deletedProduct(district_id: string) {
    return this.afs.doc("Product/" + district_id).delete();
    }
    
  }