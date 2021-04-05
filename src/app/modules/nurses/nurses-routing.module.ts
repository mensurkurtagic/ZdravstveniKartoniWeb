import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NursesDetailsComponent } from './nurses-details/nurses-details.component';

const routes: Routes = [
   { path: '', component: NursesDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NursesRoutingModule { }