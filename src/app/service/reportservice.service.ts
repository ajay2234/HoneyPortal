import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReportserviceService {

  constructor(private afs:AngularFirestore) { }


  getProduct(){
    return this.afs.collection("Product", (ref) => ref.orderBy("cat_name"))
    .valueChanges({ idField: "ProductId" })
  }
  
  instrumentview12(){ 
    return this.afs.collection("Customer", (ref) =>
    ref.orderBy("name")) 
    .valueChanges({ idField: "CustomerId" })
    }

    getorderlistbyproduct12(District: any){
      console.log(District)
      return this.afs.collection('Customer', (ref) =>
      ref.where("District", "==", District))
      .valueChanges({ idField: "CustomerId" })
      }
}
