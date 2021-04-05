import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './account/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './account/_helpers/error.interceptor';
import { AlertComponent } from './account/_components/alert.component';
import { ModulesModule } from './modules/modules.module';
import { ToastrModule } from 'ngx-toastr';
import { HelpComponent } from './help/help.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
   declarations: [
      AppComponent, AlertComponent, HelpComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ModulesModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      MatExpansionModule
   ],
   providers: [
      HttpClientModule,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
