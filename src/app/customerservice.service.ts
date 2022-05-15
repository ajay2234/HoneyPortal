import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private afs:AngularFirestore,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }
    //viewcandidtedetails
  getstudentdetails(customerid: any)
  {
    return this.afs.collection("Customer", (ref) => ref.where("uid","==",customerid))
    .valueChanges({ idField: "customerid" })
  }
  //take category from collection(dropdown)
  getcategorydetails()
  {
    return this.afs.collection("Category", (ref) => ref.orderBy("catname"))
    .valueChanges({ idField: "customerid" })
  }
  //To store full details in firebase
  registration(studentform:any)
{
  
  console.log(studentform)
  const categorydata=JSON.parse(JSON.stringify(studentform));
  return this.afs.collection("Customer").add(categorydata);
}

getdistrictlist() {
  return this.afs.collection<any>("Collection_district",(ref)=>ref.orderBy("dist_name")).snapshotChanges()
  .pipe(map((item: any) => {
  const brandData: any[] = []
  if (item) {
  // console.log(item)
  item.forEach((el: any) => {
  brandData.push({
  id: el.payload.doc.id,
  ...el.payload.doc.data()
  })
  })
  }

  return brandData;
  }))
  }
  getlocationdetails()
  {
    return this.afs.collection("Place_collection", (ref) => ref.orderBy("place_name"))
    .valueChanges({ idField: "Locationid" })
  }
  getcustomerdetails(customerid: any)
  {
    return this.afs.collection("Customer", (ref) => ref.where("uid","==",customerid))
    .valueChanges({ idField: "customerid" })
  }
  viewallLocationbydistrict(District:any){
    return this.afs.collection("Place_collection", (ref) => ref.where("district_id", "==", District))
    .valueChanges({ idField: "Locationid" })
  }
  
  updatestudentdata(User_id:string, user:any)
{
const productData = JSON.parse(JSON.stringify(User_id));
console.log(productData)
return this.afs.doc("Customer/" + user).update(productData);

}
}
