import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/account/_services/auth.service';
import { Location } from '@angular/common';
import { PatientsService } from '../services/patient-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-create-new-appointment',
   templateUrl: './create-new-appointment.component.html',
   styleUrls: ['./create-new-appointment.component.scss']
})
export class CreateNewAppointmentComponent implements OnInit {

   appointmentModel: FormGroup;
   userId;
   constructor(private fb: FormBuilder, private authService: AuthService, private location: Location, private service: PatientsService, private toastr: ToastrService) { }

   ngOnInit() {
      this.userId = this.authService.currentUserValue.id;

      this.appointmentModel = this.fb.group({
         doctorsName: [''],
         dateOfAppointment: [''],
         reasonForVisit: [''],
         status: 1,
         userId: this.userId
      })
   }

   discardChanges() {
      this.location.back();
   }

   createNewAppointment() {
      let model = this.appointmentModel.getRawValue();

      this.service.postCreateNewAppointment(model)
         .subscribe(res => {
            this.toastr.success("Termin uspješno kreiran", "Kreiranje termina uspješno", {
               positionClass: 'toast-bottom-right'
            });

            this.location.back();
         },
            err => {
               this.toastr.error("Nešto nije uredu, molimo provjerite i pokušajte ponovo", "Kreiranje termina neuspješno", {
                  positionClass: 'toast-bottom-right'
               });
            });
   }

}
