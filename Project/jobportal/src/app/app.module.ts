import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login'; 

//import {HeaderForEmployerComponent} from './shared/components/header-for-employer/header-for-employer.component';
// import {HeaderForCandidateComponent} from './shared/components/header-for-candidate/header-for-candidate.component';
export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('2946602362090073')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('1067771668515-cl2e57cemvuvu2cl24do7n2d8gcv6err.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
} 
@NgModule({
  declarations: [
    AppComponent,
  
    //HeaderForEmployerComponent,
    // HeaderForCandidateComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    // GuestModule,
    AppRoutingModule,
    HttpClientModule,
  

   
  ],
  providers: [ 
    authInterceptorProviders,
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
