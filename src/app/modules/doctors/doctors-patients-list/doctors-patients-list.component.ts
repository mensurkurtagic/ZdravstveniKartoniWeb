import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/account/_models/user';
import { BehaviorSubject, Observable, empty } from 'rxjs';
import { AuthService } from 'src/app/account/_services/auth.service';
import { DoctorsService } from '../services/doctors.service';
import { DoctorsPatients } from '../models/doctorsPatients.model';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-doctors-patients-list',
   templateUrl: './doctors-patients-list.component.html',
   styleUrls: ['./doctors-patients-list.component.scss']
})
export class DoctorsPatientsListComponent implements OnInit {
   doctorsPatients: DoctorsPatients[];

   constructor(private doctorsService: DoctorsService, private authService: AuthService, private toastr: ToastrService) { }

   ngOnInit() {
      this.doctorsService.getDoctorsPatientsByDoctorId(this.authService.currentUserValue.id)
         .subscribe(res => {
            this.doctorsPatients = res;
         },
            err => {
               this.toastr.error("Problem with the api", "Doctors Patients", {
                  positionClass: 'toast-bottom-right'
               })
            })
   }

   applyFilter(value: string) {
      if (value == "") {
         this.ngOnInit();
      }
      else {
         this.doctorsService.postSearchPatients(value)
            .subscribe(res => {
               this.doctorsPatients = res;
            })
      }
   }

}
