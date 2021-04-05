import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { CreateNewAppointmentComponent } from './create-new-appointment/create-new-appointment.component';

const routes: Routes = [
   { path: '', component: PatientsDetailsComponent },
   { path: 'createNewAppointment', component: CreateNewAppointmentComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PatientsRoutingModule { }