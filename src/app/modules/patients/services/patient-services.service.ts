import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Patients } from '../../doctors/models/patients.model';
import { DoctorsPatients } from '../../doctors/models/doctorsPatients.model';
import { DiseaseRecords } from '../../doctors/models/diseaseRecords.model';
import { Receipt } from '../../doctors/models/receipts.model';
import { Appointment } from '../models/appointment.model';

@Injectable({
   providedIn: 'root'
})

export class PatientsService {
   patient = new Patients;
   
   readonly apiURI = environment.apiURI;

   constructor(private http: HttpClient) { }

   getPatientById(patientId: number) {
      return this.http.get<Patients>(this.apiURI + 'api/Patients/getPatientDetailsByPatientId/' + patientId);
   }

   getDoctorById(doctorId: number) {
      return this.http.get(this.apiURI + 'api/DoctorPatientManagement/getDoctorById/' + doctorId);
   }

   getDiseaseRecordsByPatientId(userId) {
      return this.http.get<DiseaseRecords[]>(this.apiURI + 'api/Patients/getDiseaseRecordsByPatientId/' + userId);
   }

   getReceiptsByPatientId(userId) {
      return this.http.get<Receipt[]>(this.apiURI + 'api/Patients/getReceiptsByPatientId/' + userId);
   }

   getAppointmentsByPatientId(userId) {
      return this.http.get<Appointment[]>(this.apiURI + 'api/Patients/getPatientsAppointmentsByPatientId/' + userId);
   }

   postCreateNewAppointment(model) {
      return this.http.post<Appointment>(this.apiURI + 'api/Patients/createNewAppointment', model);
   }
}
