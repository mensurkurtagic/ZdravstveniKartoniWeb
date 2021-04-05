import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsPatientsListComponent } from './doctors-patients-list/doctors-patients-list.component';
import { DoctorsPatientsDetailsComponent } from './doctors-patients-details/doctors-patients-details.component';
import { CreateNewPatientComponent } from './create-new-patient/create-new-patient.component';
import { NewDiseaseRecordComponent } from './new-disease-record/new-disease-record.component';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { EditDiseaseRecordComponent } from './edit-disease-record/edit-disease-record.component';

const routes: Routes = [
   { path: '', component: DoctorsPatientsListComponent },
   { path: 'createNewPatient', component: CreateNewPatientComponent },
   { path: ':userId', component: DoctorsPatientsDetailsComponent },
   { path: ':userId/newDiseaseRecord', component: NewDiseaseRecordComponent },
   { path: ':userId/edit-disease-record/:id', component: EditDiseaseRecordComponent },
   { path: ':userId/createNewReceipt', component: NewReceiptComponent },


]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DoctorsRoutingModule { }