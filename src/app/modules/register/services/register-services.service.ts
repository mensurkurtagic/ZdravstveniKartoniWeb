import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
   providedIn: 'root'
})

export class RegisterService {
   
   readonly apiURI = environment.apiURI;

   constructor(private http: HttpClient) { }

   postCreateDoctor(model) {
      console.log(model)
      return this.http.post(this.apiURI + 'api/RegisterUsers/registerDoctor', model);
   }

   postCreateNurse(model) {
      console.log(model)
      return this.http.post(this.apiURI + 'api/RegisterUsers/registerNurse', model);
   }

   postCreatePharmacy(model) {
      console.log(model)
      return this.http.post(this.apiURI + 'api/RegisterUsers/registerPharmacy', model);
   }
}
