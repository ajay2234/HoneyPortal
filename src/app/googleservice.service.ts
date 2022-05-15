import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/compat/app";


@Injectable({
  providedIn: 'root'
})
export class GoogleServiceService {
  appUser$;
  constructor(
    public afAuth: AngularFireAuth,
private route: ActivatedRoute,
private router: Router,
private afs: AngularFirestore
) {
this.appUser$ = this.afAuth.authState;
}
login() {
  // Store the return URL in localstorage, to be used once the user logsinsuccessfully
  const returnUrl =
  this.route.snapshot.queryParamMap.get("returnUrl") || this.router.url;localStorage.setItem("returnUrl", returnUrl);

  this.afAuth
  .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  .then(async (res: any) => {

  localStorage.setItem('userid',res.user.uid);
  this.router.navigate(['/customermaster/customerhome']);
  console.log(res)
  })
  }

  logout(){
    this.afAuth.signOut().then(() => {
      this.router.navigate(["/guestmaster/guesthome"]);
      });
       
  }
}