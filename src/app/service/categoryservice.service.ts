import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  constructor(private afs:AngularFirestore) { }
  AddCategory(categoryData: any) {
    const CategoryData = JSON.parse(JSON.stringify(categoryData));
    return this.afs.collection("Category").add(CategoryData);
    
}
deletecategory(categoryId: string)
{
return this.afs.doc("Category/" + categoryId).delete();
}
getcategory(){
  return this.afs.collection("Category", (ref) => ref.orderBy("catname"))
  .valueChanges({ idField: "categoryId" })
}



districtadd(districtData: any) {
  const DistrictData = JSON.parse(JSON.stringify(districtData));
  return this.afs.collection("Collection_district").add(DistrictData);
  } 
  getdistrict(){
    return this.afs.collection("Collection_district", (ref) => ref.orderBy("dist_name"))
    .valueChanges({ idField: "district_id" })    
}


deletedistrict(district_id: string) {
return this.afs.doc("Collection_district/" + district_id).delete();
}


savePlace(value2: any) {
  const placedata=JSON.parse(JSON.stringify(value2));
  return this.afs.collection("Place_collection").add(placedata)

}

getdistrictlist() {
  return this.afs.collection<any>("Collection_district").snapshotChanges()
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
  updateProduct(place_id: string, place: any) {
    // const placeData = JSON.parse(JSON.stringify(place));
    
    return this.afs.doc("Category/" + place_id).update(place);
  }
  getCategoryById(Category_id: any) {
    const productData = this.afs
      .doc<any>("Category/" + Category_id)
      .valueChanges();
  
    return productData;
  }
}