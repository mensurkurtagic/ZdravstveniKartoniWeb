import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'doctors', loadChildren: () => import('./doctors/doctors.module').then(d => d.DoctorsModule) },
    { path: 'patients', loadChildren: () => import('./patients/patients.module').then(p => p.PatientsModule) },
    { path: 'nurses', loadChildren: () => import('./nurses/nurses.module').then(n => n.NursesModule) },
    { path: 'pharmacy', loadChildren: () => import('./pharmacy/pharmacy.module').then(n => n.PharmacyModule) },
    { path: 'register', loadChildren: () => import('./register/register.module').then(n => n.RegisterModule) },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModulesRoutingModule { }