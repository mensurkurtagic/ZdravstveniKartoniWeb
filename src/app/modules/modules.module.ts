import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { DoctorsModule } from './doctors/doctors.module';



@NgModule({
   declarations: [
      HomeComponent,
   ],
   imports: [
      CommonModule,
      ModulesRoutingModule,
      AngularMaterialModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
   ]
})
export class ModulesModule { }
