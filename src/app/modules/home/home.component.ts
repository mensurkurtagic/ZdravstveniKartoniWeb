import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/account/_services/auth.service';
import { UserService } from 'src/app/account/_services/user.service';
import { User } from 'src/app/account/_models/user';
import { Subscription } from 'rxjs';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   currentUser: User;
   currentUserSubscription: Subscription;
   users: User[] = [];

   constructor(private authService: AuthService, private userService: UserService) {
      this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
         this.currentUser = user;
      });
   }

   ngOnInit() {
      
   }

}
