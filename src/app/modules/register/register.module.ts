import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUsersComponent } from './register-users/register-users.component';
import { RegisterRoutingModule } from './register-routing.module';
import { MatTabsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterUsersComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class RegisterModule { }
