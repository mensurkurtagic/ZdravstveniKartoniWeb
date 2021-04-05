import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, MatDatepickerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NursesDetailsComponent } from './nurses-details/nurses-details.component';
import { NursesRoutingModule } from './nurses-routing.module';



@NgModule({
  declarations: [NursesDetailsComponent],
  imports: [
    CommonModule,
    NursesRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule
  ]
})
export class NursesModule { }
