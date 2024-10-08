import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control.component';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './dashboard/child-one/child-one.component';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'eu-north-1_Kh3FYHKnM',
      userPoolClientId:  '74qeusb93550pcd7b2243on0g9'
    }
  }
})
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    CustomFormControlComponent,
    ChildOneComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
