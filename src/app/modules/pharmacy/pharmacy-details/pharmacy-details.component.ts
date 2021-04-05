import { Component, OnInit } from '@angular/core';
import { PharmacyService } from '../services/pharmacy.service';
import { Receipt } from '../../doctors/models/receipts.model';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-pharmacy-details',
   templateUrl: './pharmacy-details.component.html',
   styleUrls: ['./pharmacy-details.component.scss']
})
export class PharmacyDetailsComponent implements OnInit {

   receipts;
   constructor(private service: PharmacyService, private toastr: ToastrService) { }

   ngOnInit() {
      this.service.getAllReceipts()
         .subscribe((res: Receipt[]) => {
            this.receipts = res;

            this.receipts.forEach(rec => {
               this.service.getDoctorById(rec.doctorId)
                  .subscribe((d: any) => {
                     rec.doctorName = d.firstName + " " + d.lastName;
                  })
            });
         })
   }

   applyFilter(value: number) {
      if (value) {
         this.service.postSearchReceiptsByUserId(value)
            .subscribe((res: Receipt[]) => {
               this.receipts = res;
               console.log(res)
            })
      }
      else {
         this.ngOnInit();
      }

   }

   annulReceipt(receiptId) {
      this.service.postAnullReceipt(receiptId)
         .subscribe(res => {
            this.toastr.success("Recept je uspješno poništen", "Poništavanje recepta uspješno", {
               positionClass: 'toast-bottom-right'
            });

            this.ngOnInit();
         },
            err => {
               this.toastr.error("Nešto nije uredu, molimo provjerite i pokušajte ponovo", "Poništavanje recepta neuspješno", {
                  positionClass: 'toast-bottom-right'
               });
            })
   }
}
