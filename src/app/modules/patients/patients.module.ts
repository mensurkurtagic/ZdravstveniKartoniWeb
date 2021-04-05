import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { MatTabsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewAppointmentComponent } from './create-new-appointment/create-new-appointment.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [PatientsDetailsComponent, CreateNewAppointmentComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class PatientsModule { }
