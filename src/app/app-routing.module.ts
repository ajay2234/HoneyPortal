import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminMasterComponent } from './Admin/admin-master/admin-master.component';
import { CategoryEditComponent } from './Admin/category-edit/category-edit.component';
import { CategoryReportComponent } from './Admin/category-report/category-report.component';
import { CustomerwiseComponent } from './Admin/customerwise/customerwise.component';
import { DistrictReportComponent } from './Admin/district-report/district-report.component';
import { EditlocationComponent } from './Admin/editlocation/editlocation.component';
import { LocationReportComponent } from './Admin/location-report/location-report.component';
import { OrderreportComponent } from './Admin/orderreport/orderreport.component';
import { ProductreportComponent } from './Admin/productreport/productreport.component';
import { RegcategoryComponent } from './Admin/regcategory/regcategory.component';
import { RegdistrictComponent } from './Admin/regdistrict/regdistrict.component';
import { ReglocationComponent } from './Admin/reglocation/reglocation.component';
import { ViewcategoryComponent } from './Admin/viewcategory/viewcategory.component';
import { ViewdistrictComponent } from './Admin/viewdistrict/viewdistrict.component';
import { ViewlocationComponent } from './Admin/viewlocation/viewlocation.component';
import { CustomerhomeComponent } from './Customer/customerhome/customerhome.component';
import { CustomermasterComponent } from './Customer/customermaster/customermaster.component';
import { MyBookingdetailsComponent } from './Customer/my-bookingdetails/my-bookingdetails.component';
import { MyProductpostViewComponent } from './Customer/my-productpost-view/my-productpost-view.component';
import { OrderDetailsComponent } from './Customer/order-details/order-details.component';
import { ProducteditComponent } from './Customer/productedit/productedit.component';
import { ProductviewComponent } from './Customer/productview/productview.component';
import { ProfileeditComponent } from './Customer/profileedit/profileedit.component';
import { ProfilefillComponent } from './Customer/profilefill/profilefill.component';
import { RegproductComponent } from './Customer/regproduct/regproduct.component';
import { ViewmoreproductComponent } from './Customer/viewmoreproduct/viewmoreproduct.component';

import { AdminloginComponent } from './Guest/adminlogin/adminlogin.component';
import { GuestHomeComponent } from './Guest/guest-home/guest-home.component';
import { GuestMasterComponent } from './Guest/guest-master/guest-master.component';


const routes: Routes = [
  {path:'',redirectTo:'/guestmaster/guesthome',pathMatch:'full'},
{path:'guestmaster',component:GuestMasterComponent,
  children:[
      {path:'guesthome',component:GuestHomeComponent},
      {path:'adminlogin',component:AdminloginComponent}


        ]},

        {path:'customermaster',component:CustomermasterComponent,
  children:[
      {path:'customerhome',component:CustomerhomeComponent},
      {path:'profilefill',component:ProfilefillComponent},
      {path:'regproduct',component:RegproductComponent},
      {path:'productview',component:ProductviewComponent},
      {path:'editproduct/:id',component:ProducteditComponent},
      {path:'viewmore/:id/:id2',component:ViewmoreproductComponent},
      {path:'mypost',component:MyProductpostViewComponent},
      {path:'profileedit',component:ProfileeditComponent},
      {path:'Mybookingdetails',component:OrderDetailsComponent},
      {path:'orders',component:MyBookingdetailsComponent}
     
  ]},

{path:'adminmaster',component:AdminMasterComponent,
  children:[
      {path:'adminhome',component:AdminHomeComponent},
      {path:'regcategory',component:RegcategoryComponent},
    {path:'categoryview',component:ViewcategoryComponent},
    {path:'regdistrict',component:RegdistrictComponent},
{path:'viewdistict',component:ViewdistrictComponent},
{path:'reglocation',component:ReglocationComponent},
{path:'viewlocation',component:ViewlocationComponent},
{path:'editlocation/:id',component:EditlocationComponent},
{path:'editcategory/:id',component:CategoryEditComponent},
{path:'categoryreport',component:CategoryReportComponent},
{path:'locationreport',component:LocationReportComponent},
{path:'districtreport',component:DistrictReportComponent},
{path:'productReport',component:ProductreportComponent},
{path:'orderreport',component:OrderreportComponent},
{path:'customerreport',component:CustomerwiseComponent}

        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
