import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private afs:AngularFirestore) { }
  getbookingBydate(catId: any, todate:any) {
    return this.afs.collection('Booking', (ref) =>
    ref.where("Booking_date", "<=", catId).where("Booking_date",">=",todate))
    .valueChanges({ idField: "Booking_Id" })
    }
}
