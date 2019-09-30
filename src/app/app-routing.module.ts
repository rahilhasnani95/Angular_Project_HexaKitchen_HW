import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { EmployeeComponent } from './employee/employee.component';
import { IndoChinsesVendorComponent } from './indo-chinses-vendor/indo-chinses-vendor.component';
import { NorthVendorComponent } from './north-vendor/north-vendor.component';
import { SouthVendorComponent } from './south-vendor/south-vendor.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Employee', component: EmployeeComponent},
  {path: 'IndoChinese', component: IndoChinsesVendorComponent },
  {path: 'NorthIndian', component: NorthVendorComponent },
  {path: 'SouthIndian', component:SouthVendorComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
