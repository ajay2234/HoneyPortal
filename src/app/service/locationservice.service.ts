import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationserviceService {
 
  afs: any;

  constructor(private AngularFirestore:AngularFirestore) { }

  savePlace(value2: any) {
    const placedata=JSON.parse(JSON.stringify(value2));
    return this.AngularFirestore.collection("Place_collection").add(placedata)
  
  }
  
  getdistrictList() {
    return this.AngularFirestore.collection<any>("Collection_district").snapshotChanges()
      .pipe(map((item: any) => {
        const disData: any[] = []
        if (item) {
          // console.log(item)
          item.forEach((el: any) => {
            disData.push({
              id: el.payload.doc.id,
              ...el.payload.doc.data()
            })
          })
        }
        return disData;
      }))
    }
    
    getlocationList() {
      return this.AngularFirestore.collection<any>("Place_collection").snapshotChanges()
        .pipe(map((item: any) => {
          const placeData: any[] = []
          if (item) {
            // console.log(item)
            item.forEach((el: any) => {
              placeData.push({
                id: el.payload.doc.id,
                ...el.payload.doc.data()
              })
            })
          }
          return placeData;
        }))
      }

    getAlllocation() {
      return new Promise<any[]>((resolve, reject) => {
        const Location = this.AngularFirestore
        .collection<any>("Place_collection", (ref) => ref.orderBy("place_name"))
        .valueChanges({ idField: "place_id" })
        .subscribe(prodRes => {
          this.getdistrictList().subscribe(res => {
            prodRes.forEach(el => {
              el.dist_name = res.find(el1 => el1.id === el.district_id)?.dist_name
            })
            resolve(prodRes)
          })
        })
      })
  
    }
    
    deleteplace(place_id:String)
  {
    return this.AngularFirestore.doc("Place_collection/"+place_id).delete();

  }

    getPlace()
  {
  //   return this.AngularFirestore.collection("Place_collection", (ref) => ref.orderBy("place_name"))
  // .valueChanges({ idField: "place_id" })


  return new Promise<any[]>((resolve, reject) => {
    const Location = this.AngularFirestore
    .collection<any>("Place_collection", (ref) => ref.orderBy("place_name"))
    .valueChanges({ idField: "place_id" })
    .subscribe(prodRes => {
      this.getdistrictList().subscribe(res => {
        prodRes.forEach(el => {
          el.dist_name = res.find(el1 => el1.id === el.district_id)?.dist_name
        })
        resolve(prodRes)
      })
    })
  })
  }
 
  getlocationById(place_id: any) {
    const productData = this.AngularFirestore
      .doc<any>("Place_collection/" + place_id)
      .valueChanges();
  
    return productData;
  }

  updateProduct(place_id: string, place: any) {
    // const placeData = JSON.parse(JSON.stringify(place));
    
    return this.AngularFirestore.doc("Place_collection/" + place_id).update(place);
  }
  

}