import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorsService } from '../services/doctors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseRecords } from '../models/diseaseRecords.model';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-edit-disease-record',
   templateUrl: './edit-disease-record.component.html',
   styleUrls: ['./edit-disease-record.component.scss']
})
export class EditDiseaseRecordComponent implements OnInit {

   diseaseRecordsModel: FormGroup;
   loaded = false;
   id: number;
   userId: number;
   constructor(private fb: FormBuilder, private service: DoctorsService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

   ngOnInit() {
      this.loaded = false;

      this.route.params.subscribe(params => {
         this.service.getDiseaseRecordByDiseaseRecordId(params.id)
            .subscribe((res: DiseaseRecords) => {
               this.id = res.id;
               this.userId = res.userId;
               this.diseaseRecordsModel = this.fb.group({
                  dateOfVisit: [res.dateOfVisit, Validators.required],
                  description: [res.description, Validators.required],
                  diagnose: [res.diagnose, Validators.required],
                  therapy: [res.therapy, Validators.required],
                  orderToDoctor: [res.orderToDoctor, Validators.required],
                  canWork: [res.canWork, Validators.required],
                  userId: params.userId
               });

               this.loaded = true;
            })
      })
   }

   updateDiseaseRecord() {
      let model = this.diseaseRecordsModel.getRawValue();

      this.service.postUpdateDiseaseRecordByDiseaseRecordId(this.id, model)
         .subscribe(res => {
            this.toastr.success("Izmjene su uspješno spremljene.", "Uređivanje evidencije uspješno", {
               positionClass: 'toast-bottom-right'
            });

            this.router.navigateByUrl('doctors/' + res.userId);
         })
   }

   discardChanges() {
      this.router.navigateByUrl('doctors/' + this.userId);
   }

}
