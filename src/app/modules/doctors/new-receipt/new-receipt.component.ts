import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/account/_services/auth.service';
import { Location } from '@angular/common';
import { DoctorsService } from '../services/doctors.service';

@Component({
   selector: 'app-new-receipt',
   templateUrl: './new-receipt.component.html',
   styleUrls: ['./new-receipt.component.scss']
})
export class NewReceiptComponent implements OnInit {

   userId;
   doctorId;
   receiptModel: FormGroup;

   constructor(private fb: FormBuilder, private route: ActivatedRoute, private authService: AuthService, private location: Location, private service: DoctorsService, private router: Router) { }

   ngOnInit() {
      this.route.params.subscribe(params => {
         this.userId = params.userId;
      });
      this.doctorId = this.authService.currentUserValue.id;

      this.receiptModel = this.fb.group({
         title: ['', Validators.required],
         description: ['', Validators.required],
         medicineDescription: ['', Validators.required],
         therapy: ['', Validators.required],
         userId: this.userId,
         doctorId: this.doctorId,
         status: 1
      })
   }

   discardChanges() {
      this.location.back();
   }

   createNewReceipt() {
      let model = this.receiptModel.getRawValue();

      this.service.postCreateNewReceipt(model)
         .subscribe(res => {
            this.router.navigateByUrl('doctors/' + this.userId);
         })

   }

}
