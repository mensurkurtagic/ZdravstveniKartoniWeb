import { Component, OnInit } from '@angular/core';
import { NursesService } from '../services/nurses.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-nurses-details',
   templateUrl: './nurses-details.component.html',
   styleUrls: ['./nurses-details.component.scss']
})
export class NursesDetailsComponent implements OnInit {

   appointments;
   approvedAppointments;
   declinedAppointments;
   constructor(private service: NursesService, private toastr: ToastrService) { }

   ngOnInit() {
      this.service.getAppointments()
         .subscribe(res => {
            this.appointments = res;
         })

      this.service.getApprovedAppointments()
         .subscribe(res => {
            this.approvedAppointments = res;
         })

      this.service.getDeclinedAppointments()
         .subscribe(res => {
            this.declinedAppointments = res;
         })
   }

   approveAppointment(userId) {
      this.service.postApproveAppointmentByPatientId(userId)
         .subscribe(res => {
            this.toastr.success("Termin uspješno odobren", "Odobravanje termina uspješno", {
               positionClass: 'toast-bottom-right'
            });

            this.ngOnInit();
         },
            err => {
               this.toastr.error("Nešto nije uredu, molimo provjerite i pokušajte ponovo", "Odobravanje termina neuspješno", {
                  positionClass: 'toast-bottom-right'
               });
            });
   }

   declineAppointment(userId) {
      this.service.postDeclineAppointmentByPatientId(userId)
         .subscribe(res => {
            this.toastr.success("Termin uspješno odbijen", "Odbijanje termina uspješno", {
               positionClass: 'toast-bottom-right'
            });

            this.ngOnInit();
         },
            err => {
               this.toastr.error("Nešto nije uredu, molimo provjerite i pokušajte ponovo", "Odbijanje termina neuspješno", {
                  positionClass: 'toast-bottom-right'
               });
            });
   }

   applyFilter(value) {
      if (value == "") {
         this.ngOnInit();
      }
      else {
         this.service.postSearchPatients(value)
            .subscribe(res => {
               this.appointments = res;
            })
      }
   }

   applyApprovedFilter(value) {
      if (value == "") {
         this.ngOnInit();
      }
      else {
         this.service.postSearchPatients(value)
            .subscribe(res => {
               this.approvedAppointments = res;
            })
      }
   }

}
