import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicInfoComponent } from './pages/registration/basic-info/basic-info.component';
import { AddressComponent } from './pages/registration/address/address.component';

const routes: Routes = [
  {
    path: "",
    component: BasicInfoComponent
  },
  {
    path: "address",
    component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
