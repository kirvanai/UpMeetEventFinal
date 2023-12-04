import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { Secret } from './Secret';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  key : Secret = new Secret();
  baseUrl : string = this.key.userUrl;
  constructor(private http:HttpClient) {}

  GetUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }
  AddUser(newUser: User):Observable<void>{
    return this.http.post<void>(this.baseUrl, newUser);
  }

  DeleteUser(id: number):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/"+id);
  }
  EditUser(id: number, editUser: Event):Observable<void>{
    return this.http.put<void>(this.baseUrl+"/"+id, editUser);
  }

}
