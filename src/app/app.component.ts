import { Component } from '@angular/core';
import { User } from './account/_models/user';
import { Router } from '@angular/router';
import { AuthService } from './account/_services/auth.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = 'Zdravstveni Kartoni';
   currentUser: User;

   constructor(private router: Router, private authService: AuthService) {
      this.authService.currentUser.subscribe(u => this.currentUser = u);
   }

   logout() {
      this.authService.logout();
      this.router.navigate(['account/login']);
   }

   get userRole() {
      //   this.authService.currentUser.subscribe((r: any) => {
      //      this.role = r.role;
      //   })
      let user = this.authService.getUser();
      if(!user) {
         return "";
      }

      return user.role;
   }
}
