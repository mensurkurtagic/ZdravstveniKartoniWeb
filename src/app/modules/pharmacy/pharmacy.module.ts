import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyDetailsComponent } from './pharmacy-details/pharmacy-details.component';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { MatTabsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PharmacyDetailsComponent],
  imports: [
    CommonModule,
    PharmacyRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class PharmacyModule { }
