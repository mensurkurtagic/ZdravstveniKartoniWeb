import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/account/_services/auth.service';
import { PatientsService } from '../services/patient-services.service';
import { Receipt } from '../../doctors/models/receipts.model';

@Component({
   selector: 'app-patients-details',
   templateUrl: './patients-details.component.html',
   styleUrls: ['./patients-details.component.scss']
})
export class PatientsDetailsComponent implements OnInit {

   userId;
   patient;
   diseaseRecords;
   receipts;
   appointments;

   constructor(private authService: AuthService, private service: PatientsService) { }

   ngOnInit() {
      this.userId = this.authService.currentUserValue.id;
      this.service.getPatientById(this.userId)
         .subscribe(res => {
            this.patient = res;
         });

      this.service.getDiseaseRecordsByPatientId(this.userId)
         .subscribe(res => {
            this.diseaseRecords = res;
         });

      this.service.getReceiptsByPatientId(this.userId)
         .subscribe((res: Receipt[]) => {
            this.receipts = res;

            this.receipts.forEach(rec => {
               this.service.getDoctorById(rec.doctorId)
                  .subscribe((d: any) => {
                     rec.doctorName = d.firstName + " " + d.lastName;
                  })
            });
         });

      this.service.getAppointmentsByPatientId(this.userId)
         .subscribe(res => {
            this.appointments = res;
         })
   }

}
