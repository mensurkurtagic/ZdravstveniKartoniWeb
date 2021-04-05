import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Receipt } from '../../doctors/models/receipts.model';

@Injectable({
   providedIn: 'root'
})

export class PharmacyService {
   
   readonly apiURI = environment.apiURI;

   constructor(private http: HttpClient) { }

   getAllReceipts() {
      return this.http.get<Receipt[]>(this.apiURI + 'api/pharmacy/getAllReceipts');
   }

   postSearchReceiptsByUserId(userId: number) {
      return this.http.post<Receipt[]>(this.apiURI + 'api/pharmacy/searchReceipts?searchValue=' + userId, {});
   }

   postAnullReceipt(receiptId) {
      return this.http.post(this.apiURI + 'api/pharmacy/anullReceiptByReceiptId/' + receiptId, {});
   }
   
   getDoctorById(doctorId: number) {
      return this.http.get(this.apiURI + 'api/DoctorPatientManagement/getDoctorById/' + doctorId);
   }

}
