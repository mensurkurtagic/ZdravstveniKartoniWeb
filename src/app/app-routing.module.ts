import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './account/_guards/auth.guard';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
   { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule), canActivate: [AuthGuard] },
   { path: 'help', component: HelpComponent },
   { path: 'account', loadChildren: () => import('./account/account.module').then(a => a.AccountModule) },
   { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
