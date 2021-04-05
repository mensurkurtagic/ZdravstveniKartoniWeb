import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register-services.service';

@Component({
   selector: 'app-register-users',
   templateUrl: './register-users.component.html',
   styleUrls: ['./register-users.component.scss']
})
export class RegisterUsersComponent implements OnInit {

   doctorModel: FormGroup;
   pharmacyModel: FormGroup;
   nurseModel: FormGroup;
   constructor(private fb: FormBuilder, private toastr: ToastrService, private service: RegisterService) { }

   ngOnInit() {
      this.doctorModel = this.fb.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         userName: ['', Validators.required],
         password: ['', Validators.required]
      });

      this.pharmacyModel = this.fb.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         userName: ['', Validators.required],
         password: ['', Validators.required]
      });

      this.nurseModel = this.fb.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         userName: ['', Validators.required],
         password: ['', Validators.required]
      });
   }

   createDoctor() {
      let model = this.doctorModel.getRawValue();
      if (this.doctorModel.invalid) {
         this.toastr.error("Podaci nisu ispravni, molimo provjerite i pokušajte ponovo.", "Registracija doktora neuspješna", {
            positionClass: 'toast-bottom-right'
         });
      }

      this.service.postCreateDoctor(model)
         .subscribe(res => {
            this.toastr.success("Doktor uspješno registrovan.", "Registracija doktora uspješna", {
               positionClass: 'toast-bottom-right'
            });
         },
            err => {
               this.toastr.error("Desila se greška, molimo provjerite podatke i pokušajte ponovo.", "Registracija doktora neuspješna", {
                  positionClass: 'toast-bottom-right'
               });
            });

   }

   createNurse() {
      let model = this.nurseModel.getRawValue();
      if (this.nurseModel.invalid) {
         this.toastr.error("Podaci nisu ispravni, molimo provjerite i pokušajte ponovo.", "Registracija sestrice neuspješno", {
            positionClass: 'toast-bottom-right'
         });
      }

      this.service.postCreateNurse(model)
         .subscribe(res => {
            this.toastr.success("Sestrica uspješno registrovana.", "Registracija sestrice uspješna", {
               positionClass: 'toast-bottom-right'
            });
         },
            err => {
               this.toastr.error("Desila se greška, molimo provjerite podatke i pokušajte ponovo.", "Registracija sestrice neuspješno", {
                  positionClass: 'toast-bottom-right'
               });
            });

   }

   createPharmacy() {
      let model = this.pharmacyModel.getRawValue();
      if (this.pharmacyModel.invalid) {
         this.toastr.error("Podaci nisu ispravni, molimo provjerite i pokušajte ponovo.", "Registracija farmaceuta neuspješna", {
            positionClass: 'toast-bottom-right'
         });
      }

      this.service.postCreatePharmacy(model)
         .subscribe(res => {
            this.toastr.success("Farmaceut uspješno registrovan.", "Registracija farmaceuta uspješna", {
               positionClass: 'toast-bottom-right'
            });
         },
            err => {
               this.toastr.error("Desila se greška, molimo provjerite podatke i pokušajte ponovo.", "Registracija farmaceuta neuspješna", {
                  positionClass: 'toast-bottom-right'
               });
            });

   }
}
