import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import { CustomerComponent } from './customer/customer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';
import { CustomerSelectComponent } from './customer-select/customer-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerformComponent,
    CustomerlistComponent,
    CustomerComponent,
    CustomerSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    AutocompleteLibModule,
    CommonModule
    
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
   schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
