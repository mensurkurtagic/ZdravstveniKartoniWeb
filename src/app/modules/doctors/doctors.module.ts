import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsPatientsListComponent } from './doctors-patients-list/doctors-patients-list.component';
import { DoctorsPatientsDetailsComponent } from './doctors-patients-details/doctors-patients-details.component';
import { MatTabsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateNewPatientComponent } from './create-new-patient/create-new-patient.component';
import { NewDiseaseRecordComponent } from './new-disease-record/new-disease-record.component';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { EditDiseaseRecordComponent } from './edit-disease-record/edit-disease-record.component';



@NgModule({
  declarations: [DoctorsPatientsListComponent, DoctorsPatientsDetailsComponent, CreateNewPatientComponent, NewDiseaseRecordComponent, NewReceiptComponent, EditDiseaseRecordComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DoctorsModule { }
