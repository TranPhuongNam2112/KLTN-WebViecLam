import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import {GuestModule } from './components/guest/guest.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    // GuestModule,
    AppRoutingModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
