import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
   constructor(private http: HttpClient) { }
   private readonly apiURI = environment.apiURI;

   getAll() {
      return this.http.get(this.apiURI + 'api/Account/getAll');
   }

   getById(id: number) {
      return this.http.get(this.apiURI + 'api/Account/getById/' + id);
   }

   register(user: User) {
      return this.http.post(this.apiURI + 'api/Account/register', user);
   }

   update(user: User) {
      return this.http.put(this.apiURI + 'api/Account/update', user);
   }

   delete(id: number) {
      return this.http.delete(this.apiURI + 'api/Account/delete/' + id);
   }
}