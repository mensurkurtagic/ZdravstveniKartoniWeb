import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorsService } from '../services/doctors.service';

@Component({
   selector: 'app-new-disease-record',
   templateUrl: './new-disease-record.component.html',
   styleUrls: ['./new-disease-record.component.scss']
})
export class NewDiseaseRecordComponent implements OnInit {

   userId: number;
   diseaseRecordsModel: FormGroup;

   constructor(private fb: FormBuilder, private location: Location, private route: ActivatedRoute, private service: DoctorsService, private router: Router) { }

   ngOnInit() {
      this.route.params.subscribe(params => {
         this.userId = params.userId;
      });

      this.diseaseRecordsModel = this.fb.group({
         dateOfVisit: ['', Validators.required],
         description: ['', Validators.required],
         diagnose: ['', Validators.required],
         therapy: ['', Validators.required],
         orderToDoctor: ['', Validators.required],
         canWork: ['', Validators.required],
         userId: this.userId
      });
      
   }

   discardChanges() {
      this.location.back();
   }

   createNewDiseaseRecord() {
      let model = this.diseaseRecordsModel.getRawValue();

      this.service.postCreateNewDiseaseRecord(model)
         .subscribe(res => {
            this.router.navigateByUrl('doctors/' + this.userId);
         })

   }
}
