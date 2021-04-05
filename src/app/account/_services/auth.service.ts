import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthService {
   private currentUserSubject: BehaviorSubject<User>;
   public currentUser: Observable<User>;
   private readonly apiURI = environment.apiURI;
   user;

   constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
      this.user = JSON.parse(localStorage.getItem('currentUser'));
   }

   public get currentUserValue(): User {
      return this.currentUserSubject.value;
   }

   login(username: string, password: string) {
      return this.http.post<any>(this.apiURI + 'api/Account/authenticate', { username, password })
         .pipe(map(user => {
            if (user && user.token) {
               localStorage.setItem('currentUser', JSON.stringify(user));
               this.user = user;
               this.currentUserSubject.next(user);
            }

            return user;
         }));
   }

   logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
   }

   getUser() {
      return this.user;
   }
}