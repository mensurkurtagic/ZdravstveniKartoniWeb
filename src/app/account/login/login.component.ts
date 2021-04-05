import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup;
   loading = false;
   submitted = false;
   returnUrl: string;

   constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private toastr: ToastrService
   ) {
      if (this.authService.currentUserValue) {
         this.router.navigate(['/']);
      }
   }

   ngOnInit() {
      this.loginForm = this.fb.group({
         username: ['', Validators.required],
         password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

   get f() { return this.loginForm.controls; }

   onSubmit() {
      this.submitted = true;
      if (this.loginForm.invalid) {
         return;
      }

      this.loading = true;
      this.authService.login(this.f.username.value, this.f.password.value)
         .pipe(first())
         .subscribe(res => {
            if (res.role == 'Doktor') {
               this.router.navigateByUrl('/doctors');
            }
            else if (res.role == 'Pacijent') {
               this.router.navigateByUrl('/patients');
            }
            else if (res.role == 'Sestrica') {
               this.router.navigateByUrl('/nurses');
            }
            else if (res.role == 'Farmaceut') {
               this.router.navigateByUrl('/pharmacy');
            }
            else if (res.role == 'Admin') {
               this.router.navigateByUrl('/register')
            }

            // this.router.navigate([this.returnUrl]);
         },
            error => {
               this.toastr.error("Vaše korisničko ime ili lozinka nisu tačni, molimo provjerite", "Prijava neuspješna", {
                  positionClass: 'toast-bottom-right'
               })
               this.loading = false;
            })
   }

}
