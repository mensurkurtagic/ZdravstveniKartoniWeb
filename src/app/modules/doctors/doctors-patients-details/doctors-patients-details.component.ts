import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { ActivatedRoute } from '@angular/router';
import { Patients } from '../models/patients.model';
import { MDCTextField } from '@material/textfield';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiseaseRecords } from '../models/diseaseRecords.model';
import { Receipt } from '../models/receipts.model';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-doctors-patients-details',
   templateUrl: './doctors-patients-details.component.html',
   styleUrls: ['./doctors-patients-details.component.scss']
})
export class DoctorsPatientsDetailsComponent implements OnInit, AfterViewInit {
   constructor(public service: DoctorsService, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) { }

   loaded = false;
   userId: number;
   patientDetailsModel: FormGroup;

   diseaseRecords: DiseaseRecords[];
   receipts: Receipt[];
   doctorsName: string;
   imeIPrezimePacijenta: string = "";
   godiste: string = "";

   ngOnInit() {
      this.loaded = false;

      this.route.params.subscribe(params => {
         this.service.getPatientById(params.userId)
            .subscribe((res: Patients) => {
               this.userId = params.userId;

               this.patientDetailsModel = this.fb.group({
                  firstName: [res.firstName, Validators.required],
                  lastName: [res.lastName, Validators.required],
                  dateOfBirth: [res.dateOfBirth, Validators.required],
                  address: [res.address, Validators.required],
                  jmbg: [res.jmbg, Validators.required],
                  bloodType: [res.bloodType, Validators.required],
                  rhFaktor: [res.rhFaktor, Validators.required],
                  gender: [res.gender, Validators.required]
               });

               this.imeIPrezimePacijenta = res.firstName + " " + res.lastName;
               this.godiste = res.dateOfBirth.split('.')[2];

               this.service.getDiseaseRecordsByPatientId(params.userId)
                  .subscribe((dr: DiseaseRecords[]) => {
                     this.diseaseRecords = dr;
                  });

               this.service.getReceiptsByPatientId(params.userId)
                  .subscribe((r: Receipt[]) => {
                     this.receipts = r;
                     this.receipts.forEach(rec => {
                        this.service.getDoctorById(rec.doctorId)
                        .subscribe((d: any) => {
                           rec.doctorName = d.firstName + " " + d.lastName;
                        })

                     });

                  })

               this.loaded = true;

            });
      });
   }

   ngAfterViewInit(): void {

   }

   discardChanges() {
      this.ngOnInit();
   }

   acceptChanges() {
      let model = this.patientDetailsModel.getRawValue();
      this.service.postPatchPatientDetails(this.userId, model)
         .subscribe(res => {
            this.toastr.success("Uspješno ste izmijenili podatke pacijenta", "Podaci uspješno izmijenjeni", {
               positionClass: 'toast-bottom-right'
            })
            this.ngOnInit();
         })
   }

}
