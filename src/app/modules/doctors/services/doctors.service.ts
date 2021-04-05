import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DoctorsPatients } from '../models/doctorsPatients.model';
import { Patients } from '../models/patients.model';
import { DiseaseRecords } from '../models/diseaseRecords.model';
import { Receipt } from '../models/receipts.model';

@Injectable({
   providedIn: 'root'
})

export class DoctorsService {
   patient = new Patients;
   
   readonly apiURI = environment.apiURI;

   constructor(private http: HttpClient) { }

   getDoctorsPatientsByDoctorId(doctorId: number) {
      return this.http.get<DoctorsPatients[]>(this.apiURI + 'api/DoctorPatientManagement/getPatientsByDoctorId/' + doctorId);
   }

   getPatientById(patientId: number) {
      return this.http.get<Patients>(this.apiURI + 'api/DoctorPatientManagement/getPatientByPatientId/' + patientId);
   }

   getDoctorById(doctorId: number) {
      return this.http.get(this.apiURI + 'api/DoctorPatientManagement/getDoctorById/' + doctorId);
   }

   postPatchPatientDetails(patientId, model) {
      return this.http.patch<Patients>(this.apiURI + 'api/DoctorPatientManagement/patchUpdatePatientDetailsByPatientId/' + patientId, model);
   }

   getDiseaseRecordsByPatientId(userId) {
      return this.http.get<DiseaseRecords[]>(this.apiURI + 'api/DoctorPatientManagement/getDiseaseRecordsByPatientId/' + userId);
   }

   postCreateNewDiseaseRecord(model) {
      return this.http.post(this.apiURI + 'api/DoctorPatientManagement/postCreateNewDiseaseRecord', model);
   }

   postCreateNewReceipt(model) {
      return this.http.post(this.apiURI + 'api/DoctorPatientManagement/postCreateNewReceipt', model);
   }

   getReceiptsByPatientId(userId) {
      return this.http.get<Receipt[]>(this.apiURI + 'api/DoctorPatientManagement/getReceiptsForPatientByPatientId/' + userId);
   }

   postSearchPatients(searchValue) {
      return this.http.post<DoctorsPatients[]>(this.apiURI + 'api/DoctorPatientManagement/searchPatients?searchValue=' + searchValue, {});
   }

   getDiseaseRecordByDiseaseRecordId(id) {
      return this.http.get<DiseaseRecords>(this.apiURI + 'api/DoctorPatientManagement/getDiseaseRecordByDiseaseRecordId/' + id);
   }

   postUpdateDiseaseRecordByDiseaseRecordId(id, model) {
      return this.http.post<DiseaseRecords>(this.apiURI + 'api/DoctorPatientManagement/updateDiseaseRecordByDiseaseRecordId/' + id, model);
   }
}
