import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { AlertService } from '../_services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   registerForm: FormGroup;
   loading = false;
   submitted = false;

  constructor(
     private fb: FormBuilder,
     private router: Router,
     private authService: AuthService,
     private userService: UserService,
     private alertService: AlertService
  ) {
     if(this.authService.currentUserValue) {
        this.router.navigate(['/']);
     }
  }

  ngOnInit() {
     this.registerForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
     });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
   //   this.submitted = true;
   //   if(this.registerForm.invalid) {
   //      return;
   //   }

   //   this.loading = true;
   //   this.userService.register(this.registerForm.value)
   //    .pipe(first())
   //    .subscribe(
   //       res => {
   //          this.alertService.success('Registration successful', true);
   //          this.router.navigate(['/login']);
   //       },
   //       error => {
   //          this.alertService.error(error);
   //          this.loading = false;
   //       }
   //    )
  }

}
