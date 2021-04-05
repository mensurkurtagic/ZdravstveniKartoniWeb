import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/account/_services/auth.service';
import { UserService } from 'src/app/account/_services/user.service';
import { AlertService } from 'src/app/account/_services/alert.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-create-new-patient',
   templateUrl: './create-new-patient.component.html',
   styleUrls: ['./create-new-patient.component.scss']
})
export class CreateNewPatientComponent implements OnInit {
   registerForm: FormGroup;
   loading = false;
   submitted = false;

   constructor(
      private fb: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private userService: UserService,
      private alertService: AlertService,
      private toastr: ToastrService
   ) {

   }

   ngOnInit() {
      this.registerForm = this.fb.group({
         firstName: ['', Validators.required],
         lastName: ['', Validators.required],
         username: ['', Validators.required],
         password: ['', [Validators.required, Validators.minLength(6)]],
         doctorId: [this.authService.currentUserValue.id]
      });
   }


   get f() { return this.registerForm.controls; }

   onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
         return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
         .pipe(first())
         .subscribe(
            res => {
               this.toastr.success("Registracija pacijenta je uspješno izvršena", "Registracija pacijenta uspješna", {
                  positionClass: 'toast-bottom-right'
               });

               this.router.navigate(['/doctors/', res]);
            },
            err => {
               this.toastr.error("Nešto nije uredu, molimo provjerite i pokušajte ponovo", "Registracija pacijenta neuspješna", {
                  positionClass: 'toast-bottom-right'
               });

               this.loading = false;
            }
         )
   }

}
