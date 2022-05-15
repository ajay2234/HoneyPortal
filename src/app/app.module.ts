import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { GuestMasterComponent } from './Guest/guest-master/guest-master.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { AdminloginComponent } from './Guest/adminlogin/adminlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { RegcategoryComponent } from './Admin/regcategory/regcategory.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { RegdistrictComponent } from './Admin/regdistrict/regdistrict.component';
import { ReglocationComponent } from './Admin/reglocation/reglocation.component';
import { ViewdistrictComponent } from './Admin/viewdistrict/viewdistrict.component';
import { CustomerhomeComponent } from './Customer/customerhome/customerhome.component';
import { CustomermasterComponent } from './Customer/customermaster/customermaster.component';
import { ViewlocationComponent } from './Admin/viewlocation/viewlocation.component';
import { EditlocationComponent } from './Admin/editlocation/editlocation.component';
import { ProfilefillComponent } from './Customer/profilefill/profilefill.component';
import { RegproductComponent } from './Customer/regproduct/regproduct.component';
import { ProductviewComponent } from './Customer/productview/productview.component';
import { ProducteditComponent } from './Customer/productedit/productedit.component';
import { ViewmoreproductComponent } from './Customer/viewmoreproduct/viewmoreproduct.component';
// import { RecieptComponent } from './Customer/reciept/reciept.component';
import { MyProductpostViewComponent } from './Customer/my-productpost-view/my-productpost-view.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { CategoryReportComponent } from './Admin/category-report/category-report.component';
import { LocationReportComponent } from './Admin/location-report/location-report.component';
import { DistrictReportComponent } from './Admin/district-report/district-report.component';
import { ProfileeditComponent } from './Customer/profileedit/profileedit.component';
// import { OrderdetailsComponent } from './Customer/orderdetails/orderdetails.component';
import { OrderDetailsComponent } from './Customer/order-details/order-details.component';
import { MyBookingdetailsComponent } from './Customer/my-bookingdetails/my-bookingdetails.component';
import { OrderreportComponent } from './Admin/orderreport/orderreport.component';
import { ProductreportComponent } from './Admin/productreport/productreport.component';
import { DatePipe } from '@angular/common';
import { CustomerwiseComponent } from './Admin/customerwise/customerwise.component';



@NgModule({
  declarations: [
    AppComponent,
    GuestHomeComponent,
    GuestMasterComponent,
    AdminHomeComponent,
    AdminMasterComponent,
    AdminloginComponent,
    RegcategoryComponent,
    ViewcategoryComponent,
    RegdistrictComponent,
    ReglocationComponent,
    ViewdistrictComponent,
    CustomerhomeComponent,
    CustomermasterComponent,
    ViewlocationComponent,
    EditlocationComponent,
    ProfilefillComponent,
    RegproductComponent,
    ProductviewComponent,
    ProducteditComponent,
    ViewmoreproductComponent,
    // RecieptComponent,
    MyProductpostViewComponent,
    CategoryEditComponent,
    CategoryReportComponent,
    LocationReportComponent,
    DistrictReportComponent,
    ProfileeditComponent,
    // OrderdetailsComponent,
    OrderDetailsComponent,
    MyBookingdetailsComponent,
    OrderreportComponent,
    ProductreportComponent,
    CustomerwiseComponent,
    
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
