import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GuestserviceService {

  constructor(private afs:AngularFirestore) { }

  AdminLogin(username: any, password :any){
    console.log(username,password)
    return this.afs.collection('adminlogin', (ref) => ref.where("username","==",username )
    .where("password","==",password) )
    .valueChanges({ idField: "adminId" })
    }
}
