import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private afs:AngularFirestore,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private storage:AngularFireStorage) { }
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
saveProduct(product: any)
{
  const productdata=JSON.parse(JSON.stringify(product));
  return this.afs.collection("Product").add(productdata);
}
upload(file: any) {
  const path = `Images/${Date.now()}_${file.name}`;
  const ref = this.storage.ref(path);
  const task = this.storage.upload(path, file);
  return new Promise((resolve, reject) => {
    task.then(async (res) => {
      res.ref.getDownloadURL()
        .then(url => {
          console.log(url)
          resolve(url);
        })
        .catch((err) => {
          console.log(err.message_);
          reject(err.code_)
        })
    })
      .catch((err) => {
        console.log(err.message_);
        reject(err.code_)
      })
  })
}
getcategoryList() {
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
getProduct()
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

getProductById(product_id: any) {
const productData = this.afs
  .doc<any>("Product/" + product_id)
  .valueChanges();

return productData;
}

updateProduct(category_id: string, category: any) {
//const categoryData = JSON.parse(JSON.stringify(category));
return this.afs.doc("Product/" + category_id).update(category);
}

deleteproduct(product_id:any)
{
return this.afs.doc("Product/"+product_id).delete();
}

getProductByCat(catId: any) {
  return this.afs.collection('Product', (ref) => ref.where("cat_name",
  "==", catId))
  .valueChanges({ idField: "product_id" })
  }
}

