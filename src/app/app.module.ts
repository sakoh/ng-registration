import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './pages/registration/basic-info/basic-info.component';
import { AddressComponent } from './pages/registration/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
