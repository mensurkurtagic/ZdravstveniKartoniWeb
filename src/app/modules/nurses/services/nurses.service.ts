import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Patients } from '../../doctors/models/patients.model';
import { DoctorsPatients } from '../../doctors/models/doctorsPatients.model';
import { DiseaseRecords } from '../../doctors/models/diseaseRecords.model';
import { Receipt } from '../../doctors/models/receipts.model';
import { Appointment } from '../../patients/models/appointment.model';

@Injectable({
   providedIn: 'root'
})

export class NursesService {
   
   readonly apiURI = environment.apiURI;

   constructor(private http: HttpClient) { }

   getAppointments() {
      return this.http.get<Appointment[]>(this.apiURI + 'api/Nurses/getAppointments');
   }

   getApprovedAppointments() {
      return this.http.get<Appointment[]>(this.apiURI + 'api/Nurses/getApprovedAppointments');
   }

   getDeclinedAppointments() {
      return this.http.get<Appointment[]>(this.apiURI + 'api/Nurses/getDeclinedAppointments');
   }

   postApproveAppointmentByPatientId(userId) {
      return this.http.post(this.apiURI + 'api/Nurses/approveAppointment/' + userId, {});
   }

   postDeclineAppointmentByPatientId(userId) {
      return this.http.post(this.apiURI + 'api/Nurses/declineAppointment/' + userId, {});
   }

   postSearchPatients(searchValue) {
      return this.http.post<Appointment[]>(this.apiURI + 'api/Nurses/searchAppointments?searchValue=' + searchValue, {})
   }

   postSearchApprovedPatients(searchValue) {
      return this.http.post<Appointment[]>(this.apiURI + 'api/Nurses/searchApprovedAppointments?searchValue=' + searchValue, {})
   }
}
